namespace AngularJSAuthentication.data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class paradot : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.People", "createdDate", c => c.DateTime());
            AlterColumn("dbo.People", "updatedDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.People", "updatedDate", c => c.DateTime(nullable: false));
            AlterColumn("dbo.People", "createdDate", c => c.DateTime(nullable: false));
        }
    }
}
