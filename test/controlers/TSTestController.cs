using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace test.controlers
{
   // [Produces("application/json")]
   // [Route("api/TSTest")]
    public class TSTestController : Controller
    {

        [Route("api/TSTest/Burklax.js")]
        public HttpResponseMessage Burklax() {
   
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            var ms = new MemoryStream(Encoding.Default.GetBytes(@"export class Burklax{ public static say(){ alert(""burklax"");} }"));
            response.Content = new StreamContent(ms);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/javascript");
       
            return response;
        }
    }
}