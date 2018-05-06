using System.Web;
using System.Web.Mvc;

namespace crud_rest_angular5_dotnet_core_department
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
