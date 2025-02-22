using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class LoginRegisterDTO
    {
        [Required]
        [StringLength(20, MinimumLength = 4)]
        [RegularExpression(@"^[a-zA-Z0-9]+$")]
        public string Username { get; set; }

        [Required]
        [StringLength(25, MinimumLength = 4)]
        [RegularExpression(@"^[a-zA-Z0-9%~!@#=&_:;,`\$\^\*\+\|]+$")]
        public string Password { get; set; }
        //Special characters (~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/)
    }
}
