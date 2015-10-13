namespace AngularJSAuthentication.data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class paradot1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "prospects", c => c.String());
            AddColumn("dbo.People", "logins", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "logins");
            DropColumn("dbo.People", "prospects");
        }
    }
}
