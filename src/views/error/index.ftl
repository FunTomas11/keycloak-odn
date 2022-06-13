<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
  <#if section = "scripts">
    <script type="module" src="${url.resourcesPath}/js/error.js"></script>
  </#if>
</@layout.registrationLayout>
