using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularJSAuthentication.Model
{
    public class Tag
    {
        [Key]
        public string tagId { get; set; }

        public string name { get; set; }
    }
}
