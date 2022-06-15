<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=true; section>
  <#if section = "scripts">
    <script type="module" src="${url.resourcesPath}/js/error.js"></script>
  </#if>
</@layout.registrationLayout>
