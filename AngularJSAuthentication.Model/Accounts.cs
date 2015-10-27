using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJSAuthentication.Model
{
    public class Accounts
    {

        [Key]
        public int peopleId { get; set; }
        public int companyId { get; set; }
        public string fullName { get; set; }
        public string type { get; set; }
        public int fieldId { get; set; }
        public string fieldName { get; set; }
        public bool syncWithCRM { get; set; }
        public bool required { get; set; }
        public bool displayMultiResponces { get; set; }
        public bool preDefinedValues { get; set; }





        public string updatedAt { get; set; }
        public DateTime? createdDate { get; set; }
        public DateTime? updatedDate { get; set; }
        public string createdBy { get; set; }
        public string updateBy { get; set; }


      





    }
}