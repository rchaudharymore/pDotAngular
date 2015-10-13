using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace AngularJSAuthentication.Model
{
    public class People
    {
        [Key]
        public int peopleId { get; set; }
        public int companyId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string jobTitle { get; set; }
        public string phoneNumber { get; set; }
        public string url { get; set; }
        public string email { get; set; }
        public bool  activateEmail { get; set; }
        public string emailSignature { get; set; }
        public bool expirePassword { get; set; }
        public string timeZone { get; set; }
        public string crmUserName { get; set; }
        public string role { get; set; }
        public virtual ICollection<Tag> tags { get; set; }
        public string prospects { get; set; }
        public string logins { get; set; }

        public DateTime? createdDate { get; set; }
        public DateTime? updatedDate { get; set; }
        public string createdBy { get; set; }
        public string updateBy { get; set; }
     
        public string ImageUrl { get; set; }
        public bool deleted { get; set; }
        [DefaultValue("false")]
        public bool emailConfirmed { get; set; }
        [DefaultValue("true")]
        public bool Approved { get; set; }
        [DefaultValue("true")]
        public bool Active { get; set; }
        //public string FullName { get; set; }
    }
}
