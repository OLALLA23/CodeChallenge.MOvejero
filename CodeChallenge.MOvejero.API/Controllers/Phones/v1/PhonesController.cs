using CodeChallengeMol.API.Phones;
using CodeChallengeMol.Shared.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CodeChallenge.MOvejero.API.Phones.v1
{
    public class PhonesController: Controller
    {
        [Produces("application/json")]
        [Route("api/Phones")]
        [HttpGet]
        public IEnumerable<DetailsPhone> GetDetails()
        {
            Thread.Sleep(3000);
            return PhonesData.GetDetailsPhones();
        }
    }
}
