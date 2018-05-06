using System;
using System.Reflection;

namespace crud_rest_angular5_dotnet_core_department.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}