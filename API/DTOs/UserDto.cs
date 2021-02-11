namespace API.DTOs
{
    public class UserDto
    {
        //This is the object that we return when a user registers or logs in
        public string Username { get; set; }

        public string Token { get; set; }
    }
}