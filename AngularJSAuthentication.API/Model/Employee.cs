using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace ConsoleApplication1.Model
{
    public class Employee
    {
        [Key]

        public int id { get; set; }                         //get-accessor used only for read only property
        public string name { get; set; }                    //set- used for write-only property.
    }

    public class student
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
    }
    public class EmployeeContext : DbContext                    //
    {
        public EmployeeContext()
            : base("DemoContext")
        {

        }

        public DbSet<Employee> Employees { get; set; }              //Add entity to database
        public DbSet<student> students { get; set; }
    }
}
