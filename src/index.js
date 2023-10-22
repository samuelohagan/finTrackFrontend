import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Cookies from 'js-cookie';
import AuthenticatedRoute from 'AuthenticatedRoutes';
import LandingPage from 'LandingPage';
import { AuthProvider } from 'contexts/AuthContext';

const token = Cookies.get('jwtToken');


ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<GoogleOAuthProvider clientId="727089532778-a8692g2ukfbv3gs0qbk2cmo4tat7tqgn.apps.googleusercontent.com">
				<ThemeEditorProvider>
					<AuthProvider>
						<HashRouter>
							<Switch>
								{/* The routes "/admin" and "/rtl" are now protected by AuthenticatedRoute */}
								<AuthenticatedRoute path="/admin" component={AdminLayout} />
								<AuthenticatedRoute path="/rtl" component={RtlLayout} />
								{/* The "/auth" route is not protected, for users to authenticate */}
								<Route path="/auth" component={AuthLayout} />
								{/* Default redirect if no other paths match */}
								<Route component={LandingPage} />
							</Switch>
						</HashRouter>
					</AuthProvider>
				</ThemeEditorProvider>
			</GoogleOAuthProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
