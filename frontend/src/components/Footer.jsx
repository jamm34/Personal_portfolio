import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-center py-4 mt-5 border-top text-muted"> {/* Bootstrap text alignment, padding, margin-top, border-top, text color */}
      <Container>
        <p>&copy; {new Date().getFullYear()} {t('footer_text')}</p>
      </Container>
    </footer>
  );
}

export default Footer;