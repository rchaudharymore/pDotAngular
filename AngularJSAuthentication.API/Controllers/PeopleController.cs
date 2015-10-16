using AngularJSAuthentication.Model;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Description;

namespace AngularJSAuthentication.API.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/People")]
    public class PeopleController : ApiController
    {
        iAuthContext context = new AuthContext();
        private static Logger logger = LogManager.GetCurrentClassLogger();

        [AllowAnonymous]
        [Route("")]
        public IEnumerable<People> Get()
        //public People Get()
        {
            //logger.Info("Get Peoples: ");
            //int compid = 0, userid = 0;
            //try
            //{
            //    var identity = User.Identity as ClaimsIdentity;

            //    // Access claims
            //    foreach (Claim claim in identity.Claims)
            //    {
            //        if (claim.Type == "compid")
            //        {
            //            compid = int.Parse(claim.Value);
            //        }
            //        if (claim.Type == "userid")
            //        {
            //            userid = int.Parse(claim.Value);
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    logger.Error("Error in getting Peoples " + ex.Message);
            //}

            ////return context.AllPeoples(compid);
            //logger.Info("End Get Company: ");
            //return context.GetPeoplebyCompanyId(compid);
            List<People> person = context.AllPeople();
             //   context.AllPeoples(compid).ToList();
            return person;
        }


        [ResponseType(typeof(People))]
        [Route("")]
        [AcceptVerbs("POST")]
        public People add(People item)
        {
            logger.Info("Add Peoples: ");
            try
            {

                var identity = User.Identity as ClaimsIdentity;
                int compid = 0, userid = 0;
                // Access claims
                foreach (Claim claim in identity.Claims)
                {
                    if (claim.Type == "compid")
                    {
                        compid = int.Parse(claim.Value);
                    }
                    if (claim.Type == "userid")
                    {
                        userid = int.Parse(claim.Value);
                    }
                }

                item.companyId = compid;
                if (item == null)
                {
                    throw new ArgumentNullException("item");
                }
                logger.Info("User ID : {0} , Company Id : {1}", compid, userid);
                context.AddPeople(item);
                logger.Info("End  Add Peoples: ");
                return item;
            }
            catch (Exception ex)
            {
                logger.Error("Error in Add Peoples " + ex.Message);

                return null;
            }
        }

        [ResponseType(typeof(People))]
        [Route("")]
        [AcceptVerbs("PUT")]
        public People Put(People item)
        {
            try
            {
                return context.updatePeople(item);
            }
            catch
            {
                return null;
            }
        }


        [ResponseType(typeof(People))]
        [Route("")]
        [AcceptVerbs("Delete")]
        public void Remove(string email)
        {
            logger.Info("DELETE Peoples: ");
            try
            {

                var identity = User.Identity as ClaimsIdentity;
                int compid = 0, userid = 0;
                // Access claims
                foreach (Claim claim in identity.Claims)
                {
                    if (claim.Type == "compid")
                    {
                        compid = int.Parse(claim.Value);
                    }
                    if (claim.Type == "userid")
                    {
                        userid = int.Parse(claim.Value);
                    }
                }
                logger.Info("User ID : {0} , Company Id : {1}", compid, userid);
                context.DeletePeople(email);
            }
            catch (Exception ex)
            {
                logger.Error("Error in Add Peoples " + ex.Message);

            }
        }
    }
}
