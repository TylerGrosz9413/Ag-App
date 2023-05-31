using Microsoft.AspNetCore.Identity;

namespace Ag_app.Repositories
{
    public interface ITokenRepository
    {
        string CreateJWTToken(IdentityUser user, List<string> roles);
    }
}
