using Amazon;
using Amazon.SecretsManager;
using Amazon.SecretsManager.Model;
using System.Text.Json;

namespace API.Utils.Helpers
{
    public class AWSSecretsHelper
    {
        public static async Task<AWSSecret> GetSecret()
        {
            /*	Use this code snippet in your app.
            *	If you need more information about configurations or implementing the sample code, visit the AWS docs:
            *	https://aws.amazon.com/developer/language/net/getting-started
            */
            string secretName = "MusicAppSecrets";
            string region = "us-east-1";

            IAmazonSecretsManager client = new AmazonSecretsManagerClient(RegionEndpoint.GetBySystemName(region));

            GetSecretValueRequest request = new GetSecretValueRequest
            {
                SecretId = secretName,
                VersionStage = "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified.
            };

            GetSecretValueResponse response;

            try
            {
                response = await client.GetSecretValueAsync(request);
            }
            catch (Exception e)
            {
                // For a list of the exceptions thrown, see
                // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
                throw e;
            }

            string secret = response.SecretString;

            // Your code goes here
            var secretJSON = JsonSerializer.Deserialize<AWSSecret>(secret);
            return secretJSON;
        }

        public static async Task<string> GetSecretTokenKey()
        {
            var secret = await GetSecret();
            var tokenKey = secret.TokenKey;
            return tokenKey;
        }

    }

    public class AWSSecret
    {
        public string ConnectionString { get; set;}
        public string TokenKey { get; set; }
    }
}
