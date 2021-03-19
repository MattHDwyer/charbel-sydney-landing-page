import React from 'react';
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';
import './NewsletterSignUp.scss'


const NewsletterSignUp = () => {


	return (
		<>
			<ReactMailchimpEmailSignupForm
				elementId="first-email-signup-form"
				url="https://towersystems.us1.list-manage.com/subscribe/post?u=81826d6f8acb4e1206472b8b0&amp;id=f24b2a275a"
				title="Subscribe to be notified!"
				subtitle="We take privacy seriously and we'll never spam or sell your information."
			/>
		</>
	)
}

export default NewsletterSignUp
