import '../../public/template/css/sb-admin-2.min.css';
import '../../public/template/css/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "Autocadastro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <script src="../../public/template/js/bootstrap.bundle.min.js"></script>
        <script src="../../public/template/js/sb-admin-2.min.js"></script>
      </body>
    </html>
  );
}
