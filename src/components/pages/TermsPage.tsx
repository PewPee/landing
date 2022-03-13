import ReactMarkdown from 'react-markdown';

const markdown = `
### 1. Terms and conditions

These terms and conditions ("Terms", "Agreement") are an agreement between Mobile Application Developer
("PewPee Service", "us", "we" or "our") and you ("User", "you" or "your"). This Agreement sets forth the
general terms and conditions of your use of the PewPee mobile application and any of its products or
services (collectively, "PewPee" or "Services").

### 2. Accounts and membership

If you create an account on PewPee, you are responsible for maintaining the security of your account and
you are fully responsible for all activities that occur under the account and any other actions taken in
connection with it. We may, but have no obligation to, monitor and review new accounts before you may
sign in and use our Services. Providing false contact information of any kind may result in the
termination of your account. You must immediately notify us of any unauthorized uses of your account or
any other breaches of security. We will not be liable for any acts or omissions by you, including any
damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete
your account (or any part thereof) if we determine that you have violated any provision of this Agreement
or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account 
or the foregoing reasons, you may not re-register for our Services. We may block your email address and
Internet protocol address to prevent further registration.

### 3. User content

We do not own any data, information or material ("Content") that you submit on PewPee in the course of
using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality,
reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content.
We may, but have no obligation to, monitor and review Content on PewPee submitted or created using our
Services by you. Unless specifically permitted by you, your use of PewPee does not grant us the license to
use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user
account for commercial, marketing or any similar purpose. But you grant us permission to access, copy,
distribute, store, transmit, reformat, display and perform the Content of your user account solely as
required for the purpose of providing the Services to you. Without limiting any of those representations or
warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove
any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or
objectionable.

### 4. Third party rights

You acknowledge and agree that the owners of the Content and certain distributors (such as app store
providers) are intended beneficiaries of the Agreements and have the right to enforce the Agreements
directly against you. Other than as set out in this section, the Agreements are not intended to grant rights
to anyone except you and PewPee, and in no event shall the Agreements create any third party beneficiary
rights. Furthermore, the rights to terminate, rescind, or agree to any variation, waiver, or settlement of
the Agreements are not subject to the consent of any other person.

If you have downloaded the App from the Apple, Inc. ("Apple") App Store or if you are using the App on an iOS
device, you acknowledge that you have read, understood, and agree to the following notice regarding Apple.
This Agreement is between you and PewPee only, not with Apple, and Apple is not responsible for the Service
and the content thereof. Apple has no obligation whatsoever to furnish any maintenance and support services
with respect to the Service. In the event of any failure of the Service to conform to any applicable warranty,
then you may notify Apple and Apple will refund any applicable purchase price for the App to you; and, to the
maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever with respect to
the Service. Apple is not responsible for addressing any claims by you or any third party relating to the
Service or your possession and/or use of the Service, including: (1) product liability claims; (2) any claim
that the Service fails to conform to any applicable legal or regulatory requirement; and (3) claims arising
under consumer protection or similar legislation. Apple is not responsible for the investigation, defense,
settlement, and discharge of any third party claim that the Service and/or your possession and use of the App
infringe that third party’s intellectual property rights. You agree to comply with any applicable third party
terms, when using the Service. Apple, and Apple’s subsidiaries, are third party beneficiaries of this Agreement,
and upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the
right) to enforce this Agreement against you as a third party beneficiary of this Agreement. You hereby
represent and warrant that (1) you are not located in a country that is subject to a U.S. Government embargo, or
that has been designated by the U.S. Government as a “terrorist supporting” country; and (2) you are not listed
on any U.S. Government list of prohibited or restricted parties.

### 5. Links to other applications

Although PewPee may link to other applications, we are not, directly or indirectly, implying any approval,
association, sponsorship, endorsement, or affiliation with any linked mobile application, unless specifically
stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any
businesses or individuals or the content of their mobile applications. We do not assume any responsibility or
liability for the actions, products, services, and content of any other third-parties. You should carefully review
the legal statements and other conditions of use of any mobile application which you access through a link from
PewPee. Your linking to any other off-site mobile applications is at your own risk.

### 6. Changes and amendments

We reserve the right to modify this Agreement or its policies relating to PewPee or Services at any time, effective
upon posting of an updated version of this Agreement on PewPee. When we do, we will revise the updated date at the
bottom of this page. Continued use of PewPee after any such changes shall constitute your consent to such changes.

### 7. Acceptance of these terms

You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using PewPee or its
Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you
are not authorized to use or access PewPee and its Services.

### 8. Contacting us

If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter
relating to it, you may send an email to support@pewpee.com

---

This document was last updated on November 30, 2019.

`

function PrivacyPage() {
  return (
    <div className="main">
      <div className="dev-page-content-wrap">
          <h1>Terms of Use</h1>
          <div className="dev-page-content">
          
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>

        </div>
      </div>
    </div>
  )
}

export default PrivacyPage;