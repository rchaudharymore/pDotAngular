//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// Created via this command line: "C:\Users\user\Desktop\Mayank data 2015\EarlyBoundGenerator.Full\Plugins\CrmSvcUtil Ref\crmsvcutil.exe" /url:"https://moreyeah.api.crm.dynamics.com/XRMServices/2011/Organization.svc" /namespace:"CrmDb" /out:"C:\Users\user\Desktop\Mayank data 2015\EarlyBoundGenerator.Full\Plugins\CrmSvcUtil Ref\Entities.cs" /servicecontextname:"CrmDbContext" /codecustomization:"DLaB.CrmSvcUtilExtensions.Entity.CustomizeCodeDomService,DLaB.CrmSvcUtilExtensions" /codegenerationservice:"DLaB.CrmSvcUtilExtensions.Entity.CustomCodeGenerationService,DLaB.CrmSvcUtilExtensions" /codewriterfilter:"DLaB.CrmSvcUtilExtensions.Entity.CodeWriterFilterService,DLaB.CrmSvcUtilExtensions" /namingservice:"DLaB.CrmSvcUtilExtensions.Entity.OverridePropertyNames,DLaB.CrmSvcUtilExtensions" /username:"msoni@moreyeah.onmicrosoft.com" /password:"mayank@123" 
//------------------------------------------------------------------------------

[assembly: Microsoft.Xrm.Sdk.Client.ProxyTypesAssemblyAttribute()]

namespace CrmDb
{
	
	
	[System.Runtime.Serialization.DataContractAttribute()]
	[System.CodeDom.Compiler.GeneratedCodeAttribute("CrmSvcUtil", "7.0.0001.0117")]
	public enum cust_customerState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Active = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inactive = 1,
	}
	
	/// <summary>
	/// This will contain the fields of project name
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	[Microsoft.Xrm.Sdk.Client.EntityLogicalNameAttribute("cust_customer")]
	[System.CodeDom.Compiler.GeneratedCodeAttribute("CrmSvcUtil", "7.0.0001.0117")]
	public partial class cust_customer : Microsoft.Xrm.Sdk.Entity, System.ComponentModel.INotifyPropertyChanging, System.ComponentModel.INotifyPropertyChanged
	{
		
		/// <summary>
		/// Default Constructor.
		/// </summary>
		public cust_customer() : 
				base(EntityLogicalName)
		{
		}
		
		public const string EntityLogicalName = "cust_customer";
		
		public const int EntityTypeCode = 10005;
		
		public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
		
		public event System.ComponentModel.PropertyChangingEventHandler PropertyChanging;
		
		private void OnPropertyChanged(string propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
			}
		}
		
		private void OnPropertyChanging(string propertyName)
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, new System.ComponentModel.PropertyChangingEventArgs(propertyName));
			}
		}
		
		/// <summary>
		/// Unique identifier of the user who created the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdby")]
		public Microsoft.Xrm.Sdk.EntityReference CreatedBy
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("createdby");
			}
		}
		
		/// <summary>
		/// Date and time when the record was created.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdon")]
		public System.Nullable<System.DateTime> CreatedOn
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("createdon");
			}
		}
		
		/// <summary>
		/// Unique identifier of the delegate user who created the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("createdonbehalfby")]
		public Microsoft.Xrm.Sdk.EntityReference CreatedOnBehalfBy
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("createdonbehalfby");
			}
		}
		
		/// <summary>
		/// Owner of project
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_createdby")]
		public string cust_CreatedBy
		{
			get
			{
				return this.GetAttributeValue<string>("cust_createdby");
			}
			set
			{
				this.OnPropertyChanging("cust_CreatedBy");
				this.SetAttributeValue("cust_createdby", value);
				this.OnPropertyChanged("cust_CreatedBy");
			}
		}
		
		/// <summary>
		/// Unique identifier for entity instances
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_customerid")]
		public System.Nullable<System.Guid> cust_customerId
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<System.Guid>>("cust_customerid");
			}
			set
			{
				this.OnPropertyChanging("cust_customerId");
				this.SetAttributeValue("cust_customerid", value);
				if (value.HasValue)
				{
					base.Id = value.Value;
				}
				else
				{
					base.Id = System.Guid.Empty;
				}
				this.OnPropertyChanged("cust_customerId");
			}
		}
		
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_customerid")]
		public override System.Guid Id
		{
			get
			{
				return base.Id;
			}
			set
			{
				this.cust_customerId = value;
			}
		}
		
		/// <summary>
		/// The name of the custom entity.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_name")]
		public string cust_name
		{
			get
			{
				return this.GetAttributeValue<string>("cust_name");
			}
			set
			{
				this.OnPropertyChanging("cust_name");
				this.SetAttributeValue("cust_name", value);
				this.OnPropertyChanged("cust_name");
			}
		}
		
		/// <summary>
		/// This will contain the description of Project
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_projectdescription")]
		public string cust_ProjectDescription
		{
			get
			{
				return this.GetAttributeValue<string>("cust_projectdescription");
			}
			set
			{
				this.OnPropertyChanging("cust_ProjectDescription");
				this.SetAttributeValue("cust_projectdescription", value);
				this.OnPropertyChanged("cust_ProjectDescription");
			}
		}
		
		/// <summary>
		/// This will contain the Project Name
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_projectname")]
		public string cust_ProjectName
		{
			get
			{
				return this.GetAttributeValue<string>("cust_projectname");
			}
			set
			{
				this.OnPropertyChanging("cust_ProjectName");
				this.SetAttributeValue("cust_projectname", value);
				this.OnPropertyChanged("cust_ProjectName");
			}
		}
		
		/// <summary>
		/// shows the strating of date of project
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_startdate")]
		public System.Nullable<System.DateTime> cust_StartDate
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("cust_startdate");
			}
			set
			{
				this.OnPropertyChanging("cust_StartDate");
				this.SetAttributeValue("cust_startdate", value);
				this.OnPropertyChanged("cust_StartDate");
			}
		}
		
		/// <summary>
		/// Updated By
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_updatedby")]
		public string cust_UpdatedBy
		{
			get
			{
				return this.GetAttributeValue<string>("cust_updatedby");
			}
			set
			{
				this.OnPropertyChanging("cust_UpdatedBy");
				this.SetAttributeValue("cust_updatedby", value);
				this.OnPropertyChanged("cust_UpdatedBy");
			}
		}
		
		/// <summary>
		/// Modified date
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("cust_updatedon")]
		public System.Nullable<System.DateTime> cust_UpdatedOn
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("cust_updatedon");
			}
			set
			{
				this.OnPropertyChanging("cust_UpdatedOn");
				this.SetAttributeValue("cust_updatedon", value);
				this.OnPropertyChanged("cust_UpdatedOn");
			}
		}
		
		/// <summary>
		/// Sequence number of the import that created this record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("importsequencenumber")]
		public System.Nullable<int> ImportSequenceNumber
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<int>>("importsequencenumber");
			}
			set
			{
				this.OnPropertyChanging("ImportSequenceNumber");
				this.SetAttributeValue("importsequencenumber", value);
				this.OnPropertyChanged("ImportSequenceNumber");
			}
		}
		
		/// <summary>
		/// Unique identifier of the user who modified the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedby")]
		public Microsoft.Xrm.Sdk.EntityReference ModifiedBy
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("modifiedby");
			}
		}
		
		/// <summary>
		/// Date and time when the record was modified.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedon")]
		public System.Nullable<System.DateTime> ModifiedOn
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("modifiedon");
			}
		}
		
		/// <summary>
		/// Unique identifier of the delegate user who modified the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("modifiedonbehalfby")]
		public Microsoft.Xrm.Sdk.EntityReference ModifiedOnBehalfBy
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("modifiedonbehalfby");
			}
		}
		
		/// <summary>
		/// Date and time that the record was migrated.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("overriddencreatedon")]
		public System.Nullable<System.DateTime> OverriddenCreatedOn
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<System.DateTime>>("overriddencreatedon");
			}
			set
			{
				this.OnPropertyChanging("OverriddenCreatedOn");
				this.SetAttributeValue("overriddencreatedon", value);
				this.OnPropertyChanged("OverriddenCreatedOn");
			}
		}
		
		/// <summary>
		/// Owner Id
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("ownerid")]
		public Microsoft.Xrm.Sdk.EntityReference OwnerId
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("ownerid");
			}
			set
			{
				this.OnPropertyChanging("OwnerId");
				this.SetAttributeValue("ownerid", value);
				this.OnPropertyChanged("OwnerId");
			}
		}
		
		/// <summary>
		/// Unique identifier for the business unit that owns the record
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningbusinessunit")]
		public Microsoft.Xrm.Sdk.EntityReference OwningBusinessUnit
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owningbusinessunit");
			}
		}
		
		/// <summary>
		/// Unique identifier for the team that owns the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owningteam")]
		public Microsoft.Xrm.Sdk.EntityReference OwningTeam
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owningteam");
			}
		}
		
		/// <summary>
		/// Unique identifier for the user that owns the record.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("owninguser")]
		public Microsoft.Xrm.Sdk.EntityReference OwningUser
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.EntityReference>("owninguser");
			}
		}
		
		/// <summary>
		/// Status of the Customer
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("statecode")]
		public System.Nullable<CrmDb.cust_customerState> statecode
		{
			get
			{
				Microsoft.Xrm.Sdk.OptionSetValue optionSet = this.GetAttributeValue<Microsoft.Xrm.Sdk.OptionSetValue>("statecode");
				if ((optionSet != null))
				{
					return ((CrmDb.cust_customerState)(System.Enum.ToObject(typeof(CrmDb.cust_customerState), optionSet.Value)));
				}
				else
				{
					return null;
				}
			}
		}
		
		/// <summary>
		/// Reason for the status of the Customer
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("statuscode")]
		public Microsoft.Xrm.Sdk.OptionSetValue statuscode
		{
			get
			{
				return this.GetAttributeValue<Microsoft.Xrm.Sdk.OptionSetValue>("statuscode");
			}
			set
			{
				this.OnPropertyChanging("statuscode");
				this.SetAttributeValue("statuscode", value);
				this.OnPropertyChanged("statuscode");
			}
		}
		
		/// <summary>
		/// For internal use only.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("timezoneruleversionnumber")]
		public System.Nullable<int> TimeZoneRuleVersionNumber
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<int>>("timezoneruleversionnumber");
			}
			set
			{
				this.OnPropertyChanging("TimeZoneRuleVersionNumber");
				this.SetAttributeValue("timezoneruleversionnumber", value);
				this.OnPropertyChanged("TimeZoneRuleVersionNumber");
			}
		}
		
		/// <summary>
		/// Time zone code that was in use when the record was created.
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("utcconversiontimezonecode")]
		public System.Nullable<int> UTCConversionTimeZoneCode
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<int>>("utcconversiontimezonecode");
			}
			set
			{
				this.OnPropertyChanging("UTCConversionTimeZoneCode");
				this.SetAttributeValue("utcconversiontimezonecode", value);
				this.OnPropertyChanged("UTCConversionTimeZoneCode");
			}
		}
		
		/// <summary>
		/// 
		/// </summary>
		[Microsoft.Xrm.Sdk.AttributeLogicalNameAttribute("versionnumber")]
		public System.Nullable<long> VersionNumber
		{
			get
			{
				return this.GetAttributeValue<System.Nullable<long>>("versionnumber");
			}
		}
	}
	
	/// <summary>
	/// Represents a source of entities bound to a CRM service. It tracks and manages changes made to the retrieved entities.
	/// </summary>
	[System.CodeDom.Compiler.GeneratedCodeAttribute("CrmSvcUtil", "7.0.0001.0117")]
	public partial class CrmDbContext : Microsoft.Xrm.Sdk.Client.OrganizationServiceContext
	{
		
		/// <summary>
		/// Constructor.
		/// </summary>
		public CrmDbContext(Microsoft.Xrm.Sdk.IOrganizationService service) : 
				base(service)
		{
		}
		
		/// <summary>
		/// Gets a binding to the set of all <see cref="CrmDb.cust_customer"/> entities.
		/// </summary>
		public System.Linq.IQueryable<CrmDb.cust_customer> cust_customerSet
		{
			get
			{
				return this.CreateQuery<CrmDb.cust_customer>();
			}
		}
	}
}
