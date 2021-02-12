using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlugginCreation.Models
{
    public class tbGridModel
    {
        public int DateID { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public bool Bootstrap { get; set; }
        public string BootstrapVersion { get; set; }
    }
}