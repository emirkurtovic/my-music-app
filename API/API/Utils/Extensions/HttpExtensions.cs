using API.Utils.Helpers;
using System.Text.Json;

namespace API.Utils.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, int totalPages, int pageSize, int totalCount)
        {
            var paginationHeader = new PaginationHeader(currentPage, totalPages, pageSize, totalCount);
            response.Headers.Append("Pagination", JsonSerializer.Serialize(paginationHeader));
            response.Headers.Append("Access-Control-Expose-Headers", "Pagination");
        }
    }
}
