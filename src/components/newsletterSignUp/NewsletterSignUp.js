import React from 'react';
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';
import './NewsletterSignUp.scss'


const NewsletterSignUp = () => {


	return (
		<>
			<ReactMailchimpEmailSignupForm
				elementId="first-email-signup-form"
				url="https://charbelsydney.us1.list-manage.com/subscribe/post?u=c60c8976ab0c8469e102846ab&amp;id=3fa791326a"
				title="Subscribe to be notified!"
				subtitle="We take privacy seriously and we'll never spam or sell your information."
			/>
		</>
	)
}

export default NewsletterSignUp
