<%@ page language="java" contentType="text/html; charset=UTF-8" %>

<%--
/*
 * Copyright 2006 Open Source Applications Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
--%>
<%@ include file="/WEB-INF/jsp/taglibs.jsp"  %>
<%@ include file="/WEB-INF/jsp/tagfiles.jsp" %>

<cosmo:standardLayout prefix="Login." showNav="false">
<%@ include file="/WEB-INF/jsp/pim/dojo.jsp" %>
 

<cosmo:staticbaseurl var="staticBaseUrl"/>
<!-- Login page recognition string: login-page-2ksw083judrmru58 
	 This is an ugly hack to allow the AJAX handler to recognize
	 this page. In previous versions of Cosmo, this was done by
	 detecting the name of the login.js file, so I'd actually
	 call this an improvment.
	 
	 Authentication in general should be rethought soon.>
<script type="text/javascript" src="${staticBaseUrl}/i18n.js"></script-->
<script type="text/javascript" src="${staticBaseUrl}/js/cosmo/ui/ui.conf.js"></script>
<script type="text/javascript" src="${staticBaseUrl}/js/cosmo/ui/styler.js"></script>
<script type="text/javascript" src="${staticBaseUrl}/js/cosmo/util/cookie.js"></script>
<script type="text/javascript" src="${staticBaseUrl}/js/cosmo/util/log.js"></script>
<script type="text/javascript" src="${staticBaseUrl}/js/cosmo/util/popup.js"></script>
<script type="text/javascript" src="${staticBaseUrl}/js/cosmo/cmp/cmp.js"></script>

<fmt:setBundle basename="PimMessageResources"/>

<script type="text/javascript" src="${staticBaseUrl}/js/cosmo/ui/global.css.js"></script>

<script type="text/javascript">

dojo.require("cosmo.ui.widget.LoginDialog");
dojo.require("cosmo.ui.widget.Button");

</script>



<div>
	<div 	dojoType="cosmo:LoginDialog" widgetId="loginDialog"
			authProc="${staticBaseUrl}/j_acegi_security_check"></div>

      <div style="padding-top:24px; text-align:center">
              <fmt:message key="Login.NoAccount"/>
      </div>
      <div style="padding-top:4px; text-align:center">
          <a href="${staticBaseUrl}/account/new">
              <fmt:message key="Login.CreateAccount"/>
          </a>
      </div>
      <div style="padding-top:36px; text-align:center;">
        <a href="javascript:Popup.open('${staticBaseUrl}/help/about', 340, 280);">
          <fmt:message key="Login.About"/>
        </a>
      </div>

  </div>

</cosmo:standardLayout>