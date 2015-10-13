using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJSAuthentication.Model
{
    class marketingRole
    {
        [Key]
        public int marketingRoleId { get; set; }

        public int roleId { get; set; }
        public String section { get; set; }
        public String subSection { get; set; }
        public bool view { get; set; }
        public bool edit { get; set; }
        public bool delete { get; set; }
        public bool resume { get; set; }
        public bool viewreport { get; set; }
        public String Description { get; set; }

        public DateTime? createdDate { get; set; }
        public DateTime? updatedDate { get; set; }
        public string createdBy { get; set; }
        public string updateBy { get; set; }
        public bool? deleted { get; set; }
        public bool? active { get; set; }
    }
}
