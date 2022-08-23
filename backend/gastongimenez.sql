-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-08-2022 a las 19:55:09
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gastongimenez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `id` mediumint(10) UNSIGNED NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `subtitulo` varchar(100) NOT NULL,
  `anio` year(4) NOT NULL,
  `tecnologia` varchar(255) NOT NULL,
  `estudio` varchar(100) NOT NULL,
  `url` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen_principal` varchar(100) DEFAULT NULL,
  `imagen_trabajo` varchar(100) DEFAULT NULL,
  `destacado` tinyint(1) NOT NULL DEFAULT 0,
  `orden` smallint(2) NOT NULL DEFAULT 0,
  `estado` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`id`, `titulo`, `subtitulo`, `anio`, `tecnologia`, `estudio`, `url`, `descripcion`, `imagen_principal`, `imagen_trabajo`, `destacado`, `orden`, `estado`) VALUES
(1, 'Adlatina', 'Portal de noticias', 2019, 'PHP, MySQL, HTML5, jQuery', 'Estudio Tres Pixeles', 'https://www.adlatina.com', 'Lideré el desarrollo y la migración del archivo histórico de más de 50.000 noticias desde el año 2001 que estaba en la plataforma Joomla a nuestro CMS realizado específicamente para este proyecto.\r\nEl mismo permite subir imágenes y videos, enviar newsletters diarios o de último minuto y dejar noticias programadas para que se publiquen en un determinado momento, entre otras características.', 'uoafknwhagvng0kad43y', 'vkh0kgotj8ge63mvz2ah', 1, 7, 1),
(2, 'Yappla', 'Portal de reservas', 2019, 'PHP, MySQL, HTML5, jQuery', 'Co-founder & CTO', 'https://www.yappla.com', 'Lideré y desarrollé una plataforma destinada al turismo de verano, con su propio sistema de reservas para actividades y balnearios de la Costa Argentina.\r\nDiseñé un api que permite el alquiler de sombra desde un plano de carpas interactivo, sincronizado con la dispo real del balneario. \r\nDesarrollé un sistema de gestión específico para la operatoria diaria de los balnearios.', 'm4qt8rrlckjzylxvlqy6', 'repqwl31so1arqgnyrg5', 1, 2, 1),
(3, 'Verduras del Central', 'Ecommerce', 2020, 'PHP, MySQL, HTML5, jQuery', 'Co-founder & CTO', 'https://www.verdurasdelcentral.com', 'Diseñé y desarrollé el ecommerce y su sistema de gestión con manejo\r\nde stock y sincronización automática de precios desde Mercado Central.\r\nDesarrollé una webapp para coordinar los repartos, calcular distancias,\r\nrecorridos estimados, horarios y notificaciones de entregas próximas.', 'vyjcz94odrrbjgdatfj9', 'hflsmpxm2xs2kfweyimy', 0, 1, 1),
(4, 'Surmax', 'Plataforma de Inversiones', 2022, 'PHP, MySQL, HTML5, jQuery', 'Full Stack Developer', 'https://gestion.agrosurmax.com/', 'Programé íntegramente la Plataforma de Inversiones para esta fintech agropecuaria, donde se publican proyectos de crowdfunding, fideicomisos ganaderos y compra-venta de divisas, entre otros.', 'z9bdq4cq2fi6ji92fysw', 'mwiag4ofhx48tbuu5adc', 1, 0, 1),
(5, 'EmpresasY', 'Software de gestión empresarial', 2018, 'PHP, MySQL, HTML5, jQuery', 'Co-founder & CTO', 'https://app.empresasy.com', 'En el año 2018 participé de la creación de una aplicación que permitía medir el bienestar laboral, calcular el clima interno y generar reportes sobre felicidad, compromiso, productividad y desarrollo de personas y liderazgo, entre otros.', 'soyfby5oyouez3cfaj9y', 'owi0gf9u9wyfrow0lxsa', 1, 11, 1),
(6, 'Universidad Nacional de las Artes', 'PHP Website + Sistemas académicos', 2017, 'PHP, MySQL, HTML5, jQuery', 'Full Stack developer', 'https://una.edu.ar/', 'Como miembro del equipo de desarrollo de productos digitales de la UNA, estuve a cargo del desarrollo del sitio web institucional y de la creación y mantenimiento de varios sistemas de uso académico interno, como inscripciones a carreras, cursos y seminarios, sistemas de control de estudiantes y cobros, etc.', 'gijqakyuzkj8l2dhuzpu', 'djdtkghegqu7jdqtzplh', 0, 3, 1),
(7, 'iLoby', 'Red Social', 2014, 'PHP, MySQL, HTML5, jQuery', 'CTO & Full Stack developer', '', 'iLoby fue un gran desafío personal.', 'nht78ej1p9cmk7t1kvhe', 'xcem82flrmz1gikrpmvf', 1, 13, 1),
(9, 'Effie Awards Latin America', 'Festival de publicidad', 2018, 'PHP, MySQL, HTML5, jQuery', 'Full Stack developer', 'http://www.effielatam.com', 'Diseño y programación del sitio web institucional para la versión Latinoamericana del certamen Effie Awards.', 'm8dptna3w8xkkdhvogf8', 'z3januer0edwj3txnlhm', 0, 5, 1),
(10, 'Universidad Maimónides', 'Full Stack developer', 2016, 'PHP, MySQL, HTML5, jQuery', '', '', 'Desarrollo del sitio web institucional para la Universidad Maimónides. El trabajo incluyó un backend realizado a medida con un sistema personalizado para el alta de inscripciones, mensajería interna y control de ingresantes a las diversas carreras.', 'wzvidjo4bgpultwwmuic', 'rr5uukzffy606cafsfyn', 1, 17, 1),
(11, 'Universidad de Belgrano', 'Contenidos Interactivos y Nuevos Medios', 2016, 'Wordpress', 'Docente', '', 'Fui profesor titular de la Cátedra Contenidos Interactivos y Nuevos Medios en la Universidad de Belgrano, y junto con mis alumnos, realizamos el sitio web institucional como un trabajo integrador en la cursada.', 'x1coxkkqdbrs1txkawzj', 'sithdq6gxt661uxnltv1', 0, 9, 1),
(12, 'CMO Summit & CMO Clinic', 'Web development', 2015, 'Illustrator, Photoshop, HTML, CSS, jQuery', 'Adlatina Group', 'http://cmoclinic.la/', 'Estuve a cargo del diseño y el desarrollo de las landing pages promocionales para los eventos CMO Summit y CMO Clinic que brindan los marketers especialistas.', 'lnk2rg70vmlcj14whwtm', 'j1zvlo4xxx2s9rxy0vey', 0, 12, 1),
(13, 'Fundación Filba', 'Front-End developer', 2016, 'HTML5, CSS, jQuery', '18dev', 'https://www.filba.org.ar/', 'Desarrollo Front-End para la Fundación Filba.', 'broiq1hvr8ntjyxikqrh', 'nlebqj6pnb81evxsycdr', 0, 8, 1),
(14, 'Marketers by Adlatina', 'Portal de noticias', 2015, 'PHP, MySQL, HTML5, jQuery', 'Full Stack developer', 'http://www.marketersbyadlatina.com/', 'Diseño y desarrollo integral para la versión digital de la revista especializada en publicidad y negocios de iberoamérica.', 'safibcrpht6zb1hana9w', 'jyqrxleqlbdke8y63xpr', 0, 10, 1),
(15, 'WinPAX', 'Portal de reservas hoteleras', 2017, 'PHP, MySQL, CodeIgniter', 'Full Stack developer', 'http://www.reservehoteles.com.ar/', 'Desarrollo de portal de reservas multihotelero con sincronización automática de precios y disponibilidad con los sistemas de OTA\'s, WinPAX y otros.', 'hrjkjpwe1wwonuz6f3b1', 'gdlzk6omsis6zaulyd70', 0, 6, 1),
(16, 'ACA - Motor de reservas', 'Portal de reservas', 2016, 'PHP, MySQL, CodeIgniter', 'Backend Developer', 'https://911hoteles.com.ar', 'Desarrollo del sistema para reservas online para la cadena de hoteles del Automovil Club Argentino. Sincronización automática de precios y disponibilidad con los sistemas de OTA\'s, WinPAX interfaces y medios de pago NPS.\r\nDesarrollo de API para la actualización de precios automática según oferta y demanda de cada hotel.', 'vscmqnl5bc8jm5qblp8r', 'rbazq8u2ui2c3mc01vig', 0, 4, 1),
(17, 'Villa del Sur', 'Javascript developer', 2013, 'Javascript', 'Eydos Digital Agency', '', 'Consultoría, asesoramiento y desarrollo de plugins y documentación para el CRM de uso interno de la empresa.', 'by3wzawxrkkxgcmrhyze', 'sccveydciacwkhj827cg', 0, 14, 1),
(18, 'Kiu Jeans', 'Web development', 2012, 'HTML, CSS, JS', '', '', 'Desarrollo de website institucional.', 'fizzaskfwumbpqt8kykr', 'lpsgvpta0uydcjwj9pq5', 0, 21, 1),
(19, 'Banco Galicia', 'Web Apps developer', 2009, 'ASP, MSSQL, HTML, CSS, JS', '', '', 'Desarrollo de portales, intranets y Webapps de uso interno para múltiples tareas administrativas del Departamento de Sistemas.', 'tjkpjfooyuvyzjasqngm', 'r9zg8npjth0jlwk5xzpd', 1, 18, 1),
(20, 'L´Bel', 'Web development', 2011, 'HTML5, CSS, jQuery', '', '', 'Desarrollo de website institucional.', 'genvv9peqsnuzjyk4l0x', 'e99ggvgz5teqtk44uhxg', 0, 23, 1),
(21, 'Calzados Micheluzzi', 'Web development', 2012, 'PHP, MySQL, HTML5, jQuery', 'Tres Pixeles', '', 'Desarrollo de sitio web institucional.', 'addsspen5s8b8o60gdtn', 'g2tu7j4xltdp03dfkfm7', 0, 20, 1),
(22, 'RubroBA', 'Portal de comercios', 2013, 'Illustrator, Photoshop, HTML, CSS, jQuery, PHP, MySQL', 'Founder & CTO', '', 'Diseño y desarrollo de buscador zonal de comercios con cálculos de distancia y geolocalización. Diseño de marca y branding.', 'yodr0siyssogxjyt1j2t', 'xgbu4haqgsqfd6bhzfi3', 0, 15, 1),
(23, 'Cinecolor Argentina', 'ActionScript Full Website', 2007, 'ActionScript, Adobe Flash', '', '', 'Desarrollo de sitio web dinámico diseñado y programado en Adobe Flash.', 'eg7bhiwbs8gebdprv6kj', 'nkgjf73apsg9igxwda1w', 1, 24, 1),
(24, 'Axialent Ten Years', 'Landing + Juego online', 2013, 'PHP, MySQL, HTML5, JS', 'Tres Pixeles', '', 'Diseño y programación de landing conmemorativa por los diez años de la empresa.\r\nDesarrollo de trivia interactiva con juegos y premios online.', 'enc4x1o1oum0eoxtmryn', 'kj9l5qbzdknquki6tda9', 0, 16, 1),
(25, 'Archsystem - Estudio de arquitectura', 'ActionScript Full Website + CD Interactivo', 2007, 'ActionScript, Adobe Flash, HTML, CSS', '', '', 'Diseño y programación de sitio web institucional y de un CD-ROM interactivo con contenido multimedia, presentación de planos en 2D y 3D y customización de ambientes para un estudio de arquitectos en Italia.', 'lkpt8yaighrp8kmkvmnw', 'cvf66lacao39f0mn82zr', 0, 28, 1),
(26, 'Fundación Ulloa', 'Full Stack developer', 2012, 'Joomla, PHP, HTML, CSS, JS', 'Proxy Interactive', '', 'Diseño y desarrollo sobre framework Joomla para el centro de salud.', 'dywdyuprpbr1yr3lcwgj', 'vq9x76maejf7ihkzbgwg', 0, 20, 1),
(27, 'Krethaus', 'Web development', 2012, 'HTML5, CSS, JS', '', 'http://www.krethaus.com/', 'Desarrollo de web institucional.', 'vgvbrpd89iaa6wtehnkw', 'lnpetwhbenmmv2ymxe33', 0, 19, 1),
(28, 'Pointer Club Argentino', 'Joomla developer', 2008, 'Joomla, PHP, HTML, CSS, JS', '', '', 'Diseño y desarrollo de sitio web bajo framework Joomla.', 'pneves8xtq5bcrtuosez', 'pvrroakzyxly7xp1wijg', 0, 27, 1),
(29, 'Hospital de niños Gutierrez', 'Web development', 2012, 'HTML, CSS, JS', '', '', 'Desarrollo de web institucional.', 'slhltkkfu34e8kndguxz', 'pqtauzehiig9hwszcj2y', 0, 26, 1),
(30, 'Sosteniendo Juntos', 'Web development', 2010, 'HTML, CSS, JS', '', '', 'Diseño y desarrollo de web institucional.', 'ppehemn71yys3cw7dgyp', 'vunk1oeomhwwxelwzjdh', 0, 31, 1),
(31, 'Dorismar', 'ActionScript Full Website', 2006, 'ActionScript, Adobe Flash', '', '', 'Desarrollo de web institucional en formato flipbook en Adobe Flash.', 'o8qpleq9i8kyxzhc1vdf', 'l1gmwndcev24o7ranoyq', 1, 29, 1),
(32, 'BMW Club Oficial Argentina', 'Web development', 2006, 'ASP, MSSQL, HTML, CSS, JS', '', '', 'Desarrollo de sitio web dinámico para el Auto Club oficial de BMW Argentina.', 'tvmjiags27wop7hw9od4', 'w8hbrzn2yz6mk5vfdncv', 0, 22, 1),
(33, 'Defelipe propiedades', 'Web development', 2011, 'ASP, MSSQL, HTML, CSS, JS', '', '', 'Diseño y desarrollo de sitio web dinámico con publicación de propiedades.', 'hofvxhw2v5euqirfsi5o', 'yecpn9yckbnescewyqcc', 0, 30, 1),
(34, 'AJ´s', 'ActionScript Full Website', 2009, 'ActionScript, Adobe Flash', '', '', 'Desarrollo de sitio web en Adobe Flash para un cliente en Tailandia.', 'y1jcfmntriyc0kry8mjc', 'xewyocw2yj77xmpdyt5r', 0, 25, 1),
(35, 'Librería Mis Leyendas', 'Web development', 2005, 'ASP, MSSQL, HTML, CSS, JS', '', '', 'Desarrollo de ecommerce para la librería ubicada en Israel.', 'qw7nqguzbxug7ti1wbeb', 'm4xro5681wg0jureipqt', 0, 33, 1),
(36, 'FIAP', 'Web Apps developer', 2005, 'ASP, MSSQL, HTML, CSS, JS', 'Festival Iberoamericano de la Publicidad', '', 'Desarrollo de Sistema de Votación en Internet que usó el Jurado del festival en la edición 2005 y 2006 del Festival Iberoamericano de la Publicidad.', 'jrs0rlt0fqfylguyunak', 't9mtain1lkowtq18cmow', 1, 32, 1),
(37, 'Selecta Laborum', 'Web development', 2004, 'HTML, CSS, JS', '', '', 'Diseño y desarrollo de sitio web institucional.', 'dxf8hvodh3rgczh1nopf', 'tm4gmul9donlse8k9gez', 0, 34, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` mediumint(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `clave` varchar(200) NOT NULL,
  `estado` tinyint(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `clave`, `estado`) VALUES
(1, 'gimenezga@gmail.com', '1895131c133d05d11087c4b4d565b79c', 1),
(2, 'flavia@utn.edu.ar', '202cb962ac59075b964b07152d234b70', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `destacado` (`destacado`),
  ADD KEY `orden` (`orden`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `clave` (`clave`),
  ADD KEY `estado` (`estado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  MODIFY `id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
