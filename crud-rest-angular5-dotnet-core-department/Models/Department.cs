namespace crud_rest_angular5_dotnet_core_department.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("HumanResources.Department")]
    public partial class Department
    {
        public short DepartmentID { get; set; }

        [Required]
        [StringLength(50)]
        public string name { get; set; }

        [Required]
        [StringLength(50)]
        public string groupName { get; set; }

        public DateTime modifiedDate { get; set; }
    }
}
