import github from "../UI/Images/SocialLogos/GitHub-Mark-64px.png";
import linkedin from "../UI/Images/SocialLogos/linkedin.png";
import PageContainer from "../UI/Shared/PageContainer";

const MailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 6l10 7 10-7" />
  </svg>
);

const Footer = () => (
  <footer className="border-t border-border bg-bg-surface">
    <PageContainer>
      <div className="flex items-center justify-between flex-wrap gap-6 py-6">
        <p className="font-mono text-nav-link flex items-center">
          <span className="text-text-faint mr-2">$</span>
          <span className="text-text-primary font-medium">./contact</span>
          <span className="vim-cursor" />
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/Jacekhacking" target="_blank" rel="noopener noreferrer"
             className="opacity-50 hover:opacity-100 transition-opacity duration-150">
            <img src={github} alt="GitHub" className="w-6 h-6 invert" />
          </a>
          <a href="https://www.linkedin.com/in/jacek-hacking-708007210" target="_blank" rel="noopener noreferrer"
             className="opacity-50 hover:opacity-100 transition-opacity duration-150">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 invert" />
          </a>
          <a href="mailto:jacekhacking@gmail.com"
             className="text-text-secondary hover:text-crimson transition-colors duration-150">
            <MailIcon />
          </a>
        </div>
      </div>
    </PageContainer>
  </footer>
);

export default Footer;
