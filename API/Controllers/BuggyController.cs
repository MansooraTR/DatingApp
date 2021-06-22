using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext context;
        public BuggyController(DataContext context)
        {
            this.context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecrets()
        {
            return "Secret text";
        }

        [Authorize]
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var thing = this.context.Users.Find(-1);
            
            if(thing == null) return NotFound();

            return Ok(thing);
        }

        [Authorize]
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var thing = this.context.Users.Find(-1);

            var thingToReturn = thing.ToString(); 

            return thingToReturn;
        }

        [Authorize]
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequests()
        {
            return BadRequest("This was not a good request");
        }
 
    }
}