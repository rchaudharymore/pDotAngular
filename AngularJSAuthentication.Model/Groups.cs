using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJSAuthentication.Model
{
    public class Groups
    {

        [Key]
        public int groupId { get; set; }
        public string name { get; set; }
        public string tags { get; set; }
        public string users { get; set; }


        public string updated { get; set; }
        public DateTime? createdDate { get; set; }
        public DateTime? updatedDate { get; set; }
        public string createdBy { get; set; }
        public string updateBy { get; set; }
    }
}