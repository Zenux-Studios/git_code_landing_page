export default function Privacy() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            Your privacy is important to us. This Privacy Policy explains our
            commitment to ensuring your data is protected. We do not collect,
            store, or share any user data when you use our browser extension.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Data Collection</h2>
          <p className="text-muted-foreground">
            Our extension is designed to function without the need to collect
            any personal or non-personal information from its users. All actions
            performed by the extension occur locally on your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-muted-foreground">
            Since we do not collect any data, there is no data to secure. All
            processing occurs locally on your device, ensuring your privacy and
            security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Updates to This Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this privacy policy from time to time. Any changes
            will be reflected on this page, along with an updated "Last Updated"
            date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at support@zenux.live.
          </p>
        </section>

        <div className="text-sm text-muted-foreground mt-8">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
