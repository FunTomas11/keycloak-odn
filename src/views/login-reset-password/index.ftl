<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=true displayMessage=messagesPerField.printIfExists('username', properties.kcFormGroupErrorClass!) != ""; section>
  <#if section = "scripts">
    <script typo="module" src="${url.resourcesPath}/js/login-reset-password.js"></script>
  </#if>
</@layout.registrationLayout>
