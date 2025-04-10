import s from '@/styles/views/footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.logo}>
          <h2>拝啓、はじまりの音へ</h2>
        </div>
        <div className={s.socials}>
          <a href='https://x.com/haikei_hajioto' target='_blank' rel='noopener noreferrer'>
            X (formerly Twitter)
          </a>
          <a href='mailto:haikei.hajimari.no.oto.he@gmail.com' target='_blank' rel='noopener noreferrer'>
            Contact
          </a>
        </div>
      </div>
      <div className={s.copy}>
        <p>&copy; 2025『拝啓、はじまりの音へ』運営チーム All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
