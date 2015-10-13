namespace AngularJSAuthentication.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TT : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "FullName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "FullName");
        }
    }
}
