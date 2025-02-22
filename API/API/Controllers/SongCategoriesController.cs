using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using API.Persistence.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongCategoriesController : ControllerBase
    {
        [Authorize]    
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetCategories()
        {
            try
            {
                return Enum.GetNames<SongCategory>();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
