import MainComponent from "@/app/components/common/main";

const page = () => {
  return (
    <MainComponent>
      <div div className="mt-10 lg:mt-20 text-gray-200 space-y-10">
        <div className="space-y-5">
          <p className="text2">
            Privacy Policy for Easy Auto Refresh Chrome Extension
          </p>
          <div>
            <p className="text3">1. Introduction</p>
            <p className="mt-2">{`The Easy Auto Refresh Chrome Extension ("we," "me," or "our") is dedicated to safeguarding your privacy. This Privacy Policy outlines how I collect, use, and share user data when you use our extension.`}</p>
          </div>
        </div>
        <div>
          <p className="text3">2. Information I Collect</p>
          <ul className="mt-2 list-disc pl-7">
            <li>
              Tab Information: I collect the ID of the specific tab where the
              auto-refresh feature is initiated. This data helps me manage the
              auto-refresh functionality effectively.
            </li>
            <li>
              User Preferences: I store your preferences regarding refresh
              intervals and settings to enhance your user experience.
            </li>
          </ul>
        </div>
        <div>
          <p className="text3">3. How I Use Your Information</p>
          <p className="mt-2">
            I use the collected information for the following purposes:
          </p>
          <ul className="mt-2 list-disc pl-7">
            <li>
              Functionality: To enable the auto-refresh feature and ensure that
              your settings are applied correctly.
            </li>
            <li>
              User Experience: To remember your preferences and provide a more
              personalized experience.
            </li>
          </ul>
        </div>
        <div>
          <p className="text3">4. Data Sharing</p>
          <ul className="mt-2 list-disc pl-7">
            <li>
              Third Parties: I do not share your data with any third parties.
              The information collected is stored locally within your browser
              and is only accessible to the Easy Auto Refresh Chrome Extension.
            </li>
          </ul>
        </div>
        <div>
          <p className="text3">5. Data Storage</p>
          <p className="mt-2">
            {`Your data is stored locally in your browser's storage and is not
              sent to our servers or shared with any external parties.`}
          </p>
        </div>
        <div>
          <p className="text3">6. User Control</p>
          <p className="mt-2">
            {`You have control over your data and can manage your preferences
              directly through the extension's interface. If you wish to delete
              your stored preferences, you can do so by clearing your browser's
              data.`}
          </p>
        </div>
        <div>
          <p className="text3">7. Changes to This Privacy Policy</p>
          <p className="mt-2">
            I may update this Privacy Policy occasionally. I will notify you of
            any changes by updating the effective date at the top of this
            policy. Your continued use of the extension after any changes
            indicates your acceptance of the new Privacy Policy.
          </p>
        </div>
        <div>
          <p className="text3">8. Contact Us</p>
          <p className="mt-2">
            If you have any questions or concerns regarding this Privacy Policy,
            please contact me at <strong>contact@mhshuvo.com</strong>
          </p>
        </div>
      </div>
    </MainComponent>
  );
};

export default page;
