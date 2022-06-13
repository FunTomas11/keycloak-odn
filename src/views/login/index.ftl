<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=true displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
  <#if section = "scripts">
    <script type="module" src="${url.resourcesPath}/js/login.js"></script>
  </#if>
</@layout.registrationLayout>
