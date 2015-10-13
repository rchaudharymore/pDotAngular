using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJSAuthentication.Model
{
    class Role
    {
        [Key]
        public int roleId { get; set; }
        public String Name { get; set; }
        public String Desc { get; set; }

        public DateTime? createdDate { get; set; }
        public DateTime? updatedDate { get; set; }
        public string createdBy { get; set; }
        public string updateBy { get; set; }
        public bool? deleted { get; set; }
        public bool? active { get; set; }


    }
}
