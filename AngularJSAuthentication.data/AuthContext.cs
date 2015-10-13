
using AngularJSAuthentication.Model;

using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJSAuthentication.API
{
    public interface iAuthContext
    {

     
  
        People getPersonIdfromEmail(string email);
        //IEnumerable<Company> AllCompanies { get; }
        //Company AddCompany(string company);
        //Company PutCompany(Company company);
        //bool DeleteCompany(int id);
        //bool CompanyExists(string companyName);
        //Company GetCompanybyCompanyId(int id);

     


        IEnumerable<People> AllPeoples(int compid);
        People GetPeoplebyCompanyId(int id);
        People AddPeople(People people);
        People updatePeople(People people);
        List<People> AllPeople();
        bool DeletePeople(int id);


    }

    public class AuthContext : IdentityDbContext<IdentityUser>, iAuthContext
    {
        public AuthContext()
            : base("AuthContext")
        {

        }

     
        public DbSet<People> Peoples { get; set; }       
     
        public DbSet<Client> Clients { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public IEnumerable<Company> AllCompanies
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public List<People> AllPeople()
        {

            if (Peoples.AsEnumerable().Count() > 0)
            {
                List<People> person = new List<People>();
                person = Peoples.ToList();
                return person ;
            }
            else

            {
                List<People> people = new List<People>();
                return people;
            }

        }
        public IEnumerable<People> AllPeoples(int compid)
        {
          
                if (Peoples.AsEnumerable().Count() > 0)
                {
                List<People> person = new List<People>();
                person = Peoples.Where(e => e.companyId == compid).ToList();
                return person.AsEnumerable();
                }
                else

                {
                    List<People> people = new List<People>();
                    return people.AsEnumerable();
                }
            
        }

        public People AddPeople(People people)
        {
            List<People> peoples = Peoples.Where(c => c.email.Trim().Equals(people.email.Trim())).ToList();
            People objPeople = new People();
            if (peoples.Count == 0)
            {
                people.firstName = people.firstName;
                people.lastName = people.lastName;
                people.email = people.email;
                people.createdBy = people.createdBy;
                people.createdDate = DateTime.Now;
                people.updatedDate = DateTime.Now;
                Peoples.Add(people);
                int id = this.SaveChanges();

                //Projects.Add(project);
                ////int ProjectID = this.SaveChanges();
                //project.ProjectID = ProjectID;
                return people;
            }
            else
            {
                //objProject.Exception = "Already";
                return objPeople;
            }
        }


        public People updatePeople(People objCust)
        {
            People proj = Peoples.Where(x => x.peopleId == objCust.peopleId).FirstOrDefault();
            if (proj != null)
            {
                //proj.UpdatedDate = DateTime.Now;
                ////proj.Client = objCust.Client;
                //proj.PeopleFirstName = objCust.PeopleFirstName;
                //proj.PeopleLastName = objCust.PeopleLastName;
                //proj.Email = objCust.Email;                
                //proj.Department = objCust.Department;
                //proj.BillableRate = objCust.BillableRate;
                //proj.CostRate = objCust.CostRate;
                //proj.Permissions = objCust.Permissions;
                //proj.Type = objCust.Type;
                //proj.ImageUrl = objCust.ImageUrl;

                //proj.CreatedBy = objCust.CreatedBy;
                //proj.CreatedDate = objCust.CreatedDate;
                //proj.UpdateBy = objCust.UpdateBy;
                //proj.EmailConfirmed = objCust.EmailConfirmed;
                Peoples.Attach(proj);
                this.Entry(proj).State = EntityState.Modified;
                this.SaveChanges();
                return objCust;
            }
            else
            {
                return objCust;
            }
        }


        public bool DeletePeople(int id)
        {
            try
            {
                People DL = new People();
                DL.peopleId = id;
                Entry(DL).State = EntityState.Deleted;

                SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public People getPersonIdfromEmail(string email)
        {
            throw new NotImplementedException();
        }

        public People GetPeoplebyCompanyId(int id)
        {
            throw new NotImplementedException();
        }

     
        //public Company AddCompany(string company)
        //{
        //    throw new NotImplementedException();
        //}

        //public Company PutCompany(Company company)
        //{
        //    throw new NotImplementedException();
        //}

        //public bool DeleteCompany(int id)
        //{
        //    throw new NotImplementedException();
        //}

        //public bool CompanyExists(string companyName)
        //{
        //    throw new NotImplementedException();
        //}

        //public Company GetCompanybyCompanyId(int id)
        //{
        //    throw new NotImplementedException();
        //}

        //public People GetPeoplebyCompanyId(int id)
        //{
        //    throw new NotImplementedException();
        //}
    }
}