<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true displayMessage=!messagesPerField.existsError('username'); section>
  <#if section = "scripts">
    <script type="module" src="${url.resourcesPath}/js/login-update-password.js"></script>
  </#if>
</@layout.registrationLayout>
