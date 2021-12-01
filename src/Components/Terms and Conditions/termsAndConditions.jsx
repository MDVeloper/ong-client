import React from "react";
import Styles from "./termsAndConditions.module.css"
import { Container } from '@mui/material';
import { Link } from "react-router-dom";


export default function TermsAndConditions() {
    return(
        <Container maxWidth={'xl'} className={Styles.container} >
            <p 
                style={{display:"flex", justifyContent:"flex-start", marginLeft:"1rem", marginBottom:"1rem"}}>
                    
                    <Link 
                        style={{marginRight:".3rem", color:"#62A3F7"}} to="/register">
                        Registro
                    </Link> 
                {">"} Terminos y condiciones
            </p>

            <h1>Términos y condiciones de uso del sitio</h1>

            <Container  maxWidth={'md'} className={Styles.termsAndConditionsTextContainer}>
                
                <p> Última modificación: 25/10/2021</p>

                <p>Este contrato describe los términos y condiciones generales (los "Términos y Condiciones Generales") aplicables al uso de los servicios ofrecidos por Mercado Libre Colombia LTDA. ("los Servicios") dentro del sitio www.mercadolibre.com.co, www.deremate.com.com, www.dereto.com.co y www.mercadopago.com.co ("Mercado Libre" o el "sitio"). Cualquier persona que desee acceder y/o usar el sitio o los servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales, junto con todas las demás políticas y principios que rigen Mercado Libre y que son incorporados al presente por referencia.</p>

                <p>CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES GENERALES, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO Y/O LOS SERVICIOS.</p>

                <p>El Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad así como en los demás documentos incorporados a los mismos por referencia, previo a su inscripción como Usuario de Mercado Libre.</p>

                <p> 01 - Capacidad
                Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar. No podrán utilizar los servicios las personas que no tengan esa capacidad, los menores de edad o Usuarios de Mercado Libre que hayan sido suspendidos temporalmente o inhabilitados definitivamente. Si estás inscribiendo un Usuario como Empresa, debes tener capacidad para contratar a nombre de tal entidad y de obligar a la misma en los términos de este Acuerdo.</p>

                <p>02 - Inscripción
                Es obligatorio completar el formulario de inscripción en todos sus campos con datos válidos para poder utilizar los servicios que brinda Mercado Libre. El futuro Usuario deberá completarlo con su información personal de manera exacta, precisa y verdadera ("Datos Personales") y asume el compromiso de actualizar los Datos Personales conforme resulte necesario. Mercado Libre podrá utilizar diversos medios para identificar a sus Usuarios, pero Mercado Libre NO se responsabiliza por la certeza de los Datos Personales provistos por sus Usuarios. Los Usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de los Datos Personales ingresados.</p>

                <p>A su exclusiva discreción, Mercado Libre podrá requerir una inscripción adicional a los Usuarios que operen como concesionarias o inmobiliarias, como requisito para que dichos Usuarios accedan a paquetes especiales de publicaciones. En estos casos, una vez efectuada la inscripción adicional, las ofertas de venta de automóviles o inmuebles que realicen las concesionarias o inmobiliarias, respectivamente, sólo se publicarán en Mercado Libre a través de alguno de dichos paquetes o bajo las modalidades que Mercado Libre habilite para este tipo de Usuarios.</p>

                <p>Mercado Libre se reserva el derecho de solicitar algún comprobante y/o dato adicional a efectos de corroborar los Datos Personales, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. En estos casos de inhabilitación, se dará de baja todos los artículos publicados, así como las ofertas realizadas, sin que ello genere algún derecho a resarcimiento.</p>

                <p>El Usuario accederá a su cuenta personal ("Cuenta") mediante el ingreso de su Seudónimo y clave de seguridad personal elegida ("Clave de Seguridad"). El Usuario se obliga a mantener la confidencialidad de su Clave de Seguridad.</p>

                <p>La Cuenta es personal, única e intransferible, y está prohibido que un mismo Usuario inscriba o posea más de una Cuenta. En caso que Mercado Libre detecte distintas Cuentas que contengan datos coincidentes o relacionados, podrá cancelar, suspender o inhabilitarlas.</p>

                <p>El Usuario será responsable por todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma está restringido al ingreso y uso de su Clave de Seguridad, de conocimiento exclusivo del Usuario. El Usuario se compromete a notificar a Mercado Libre en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión o transferencia de la Cuenta (incluyendo la reputación y calificaciones) bajo ningún título.</p>

                <p>Mercado Libre se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar una inscripción previamente aceptada, sin que esté obligado a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento.</p>

                <p>El Usuario no podrá registrarse si él, o sus subsidiarias, afiliadas, directores, funcionarios, empleados o agentes es(son) una persona física o jurídica (“persona”) propiedad de, o controlada por, personas que se encuentren (i) Sujetas a Sanciones o (ii) Situadas en, constituidas en, o residentes de un país o territorio que sea Sujeto a Sanciones, o cuyo Gobierno sea sujeto a Sanciones, incluyendo sin limitaciones: la Región de Crimea, Cuba, Irán, Siria y Corea del Norte.  Para efectos de lo anterior se entenderá por Sanciones: las restricciones o prohibiciones en la capacidad de participar en negocios y otras actividades económicas con ciertos países, regiones, personas, entidades y sectores industriales o cualquier medida gubernamental diseñada para privar a una entidad objetivo (incluyendo individuos, corporaciones, territorios, países, etc.) de activos financieros y económicos con el fin de contrarrestar e intentar reducir el comportamiento que amenace la seguridad nacional o internacional o contravenga el derecho internacional. En particular, serán rechazados como usuarios o suspendidos o inhabilitados quienes se encuentren incluidos en las Listas de Sancionados de OFAC (Office of Foreign Assets Control de Estados Unidos), Listas de terroristas de las Naciones Unidas (UN),  Lista de Organizaciones terroristas extranjeras del Departamento de Estado de Estados Unidos, y Listas de la Unión Europea de organizaciones y de personas catalogadas como terroristas, así como en cualesquier lista nacional de personas bloqueadas, quedando prohibida la registración o utilización de la aplicación de Mercado Libre en los mencionados territorios o jurisdicciones sancionadas. </p>

                <p>Al adherir a estos Términos y Condiciones, los Usuarios vendedores se comprometen a cumplir con la normatividad fiscal vigente, así como evitar cualquier maniobra que pudiera importar el lavado de activos proveniente de los delitos de evasión tributaria, contrabando o cualquier otro delito previsto en la legislación que implique una defraudación fiscal. </p>

                <p>Ver políticas de inhabilitación o suspensión de usuario</p>

                <p>03 - Modificaciones del Acuerdo
                MercadoLibre podrá modificar los Términos y Condiciones Generales en cualquier momento haciendo públicos en el Sitio los términos modificados. Todos los términos modificados entrarán en vigor a los 10 (diez) días de su publicación. Dichas modificaciones serán comunicadas por Mercado Libre a los usuarios que en la Configuración de su Cuenta de Mercado Libre hayan indicado que desean recibir notificaciones de los cambios en estos Términos y Condiciones. Todo usuario que no esté de acuerdo con las modificaciones efectuadas por Mercado Libre podrá solicitar la baja de la cuenta.</p>

                <p>El uso del sitio y/o sus servicios implica la aceptación de estos Términos y Condiciones generales de uso de MercadoLibre.</p>

                <p>04 - Listado de Bienes
                4.1 Utilización de Mercado Pago. Al publicar un anuncio en el Sitio, el usuario vendedor consiente expresamente la utilización de Mercado Pago como una de las formas disponibles para el pago del bien o servicio ofrecido y se obliga a no modificar en nada el precio de venta del bien o servicio si el comprador decidiera utilizar MercadoPago. Asimismo, el usuario declara que ha leído, comprendido y aceptado los Términos y Condiciones de utilización de dicho servicio.</p>

                <p>4.2 Pago de tarifas de Mercado Libre a través de Mercado Pago. Al publicar un anuncio en el sitio, el usuario acepta  que los pagos de dichas tarifas se procesarán a través de MercadoPago</p>

                <p>4.3 Publicación de bienes y/o servicios. El Usuario deberá ofrecer a la venta, los bienes y/o servicios en las categorías y subcategorías apropiadas. Las publicaciones podrán incluir textos descriptivos, gráficos, fotografías y otros contenidos y condiciones pertinentes para la venta del bien o la contratación del servicio, siempre que no violen ninguna disposición de este acuerdo o demás políticas de Mercado Libre. El producto ofrecido por el Usuario Vendedor debe ser exactamente descrito en cuanto a sus condiciones y características relevantes. Se entiende y presume que mediante la inclusión del bien o servicio en Mercado Libre, el Usuario acepta que tiene la intención y el derecho de vender el bien por él ofrecido, o está facultado para ello por su titular y lo tiene disponible para su entrega inmediata o para el plazo especificado en la publicación. Se establece que los precios de los productos publicados deberán ser expresados con IVA incluido cuando corresponda la aplicación del mismo, y en moneda del curso legal. Mercado Libre podrá remover cualquier publicación cuyo precio no sea expresado de esta forma para evitar confusiones o malos entendidos en cuanto al precio final del producto. Se deja expresamente establecido que ninguna descripción podrá contener datos personales o de contacto, tales como, y sin limitarse a, números telefónicos, dirección de e-mail, dirección postal, direcciones de páginas de Internet que contengan datos como los mencionados anteriormente, salvo lo estipulado específicamente para las categorías: Carros, motos y otros, Inmuebles y Servicios. No podrá publicitarse otros medios de pagos, distintos de los enunciados por Mercado Libre en la página de publicación de artículos. En caso que se infrinja cualquiera de las disposiciones establecidas en esta cláusula, Mercado Libre podrá editar el espacio, solicitar al Usuario que lo edite, o dar de baja la publicación donde se encuentre la infracción.</p>

                <p>4.4 Licencia sobre imágenes, fotografías, marcas e Información de Producto. El usuario autoriza a Mercado Libre y sus compañías asociadas a utilizar, publicar, reproducir y/o adaptar las imágenes y fotografías incluidas en sus publicaciones, su nombre comercial, marcas, frases publicitarias, logos, diseños, dibujos, imágenes y todo otro signo distintivo que identifique al Usuario y sus productos o servicios (la "Marca") e información de sus productos o servicios  ("Información de Producto"). Será obligación del Usuario incluir en las publicaciones  las imágenes, fotografías y Marca, así como la Información de Producto, de manera actualizada, incluyendo aquellas advertencias que sean requeridas por la legislación aplicable para la venta o publicidad de los productos y servicios . Conforme a lo anterior, Mercado Libre podrá obtener las imágenes, fotografías, Marca e Información de Producto directamente del Usuario, terceros autorizados por éste, o a través del sitio web del Usuario.</p>

                <p>En particular, el Usuario otorga a Mercado Libre y a sus sociedades relacionadas una autorización gratuita, irrevocable, no exclusiva, internacional y sin límite temporal para usar, publicar, reproducir y/o adaptar las imágenes, fotografías, la Marca y la Información de Producto con el fin de ser usadas en todos los sitios y aplicaciones de Mercado Libre, redes sociales y/o en cualquier medio masivo y no masivo de comunicación, incluyendo sin limitación, plataformas y cualquier otro medio digital o físico que Mercado Libre considere oportuno o con aquellas otras plataformas o sitios de Internet con los cuales Mercado Libre haya realizado una alianza, para identificar ofertas, clasificar productos, crear catálogos, realizar acciones publicitarias y de marketing vinculadas a los servicios de Mercado Libre, incluyendo la posibilidad de asociación con  marcas y/o nombres comerciales de terceros, así como sublicenciar su uso a terceros, incluyendo, de manera enunciativa, más no limitativa,  facultades de uso, publicación, reproducción y adaptación de las imágenes, fotografías, Marca e Información de Producto en el marco de las Publicaciones de Catálogo.</p>

                <p>El Usuario declara y garantiza que es titular o licenciatario de los derechos necesarios sobre las imágenes, fotografías contenidas en sus publicaciones, sobre las Marcas, así como sobre la Información de Producto, y que cuenta con los derechos y facultades necesarias para conceder la autorización detallada en esta cláusula, siendo responsable exclusivo por cualquier infracción a derechos de terceros o por las inconsistencias o inexactitud en la Información de Producto.</p>

                <p>Mercado Libre podrá eliminar la publicación de las imágenes y fotografías, e incluso del bien o servicio, si interpretara, a su exclusivo criterio, que la imagen no cumple con los presentes Términos y Condiciones. Las imágenes y fotografías de bienes o servicios publicados bajo la modalidad Premium deberán cumplir con algunos requisitos adicionales como condición para ser expuestas en la Página Principal del Sitio Web. Conoce los requisitos.</p>

                <p>4.5 Artículos Prohibidos. Sólo podrán ser ingresados en las listas de bienes y/o servicios ofrecidos, aquellos cuya venta no se encuentre tácita o expresamente prohibida en los Términos y Condiciones Generales y demás políticas de Mercado Libre o por la ley vigente. Para obtener mayor información sobre artículos o servicios prohibidos, se pueden consultar nuestras Políticas de Artículos Prohibidos de Mercado Libre.</p>

                <p>4.6 Brand Protection Program. Mercado Libre ha desarrollado un Programa (en adelante, "BPP") destinado a brindar a los titulares de Propiedad Intelectual una herramienta para denunciar contenido en supuesta infracción a sus derechos. Los participantes del BPP, sean los titulares de derechos o sus apoderados, podrán identificar y solicitar la remoción de aquellas publicaciones que infrinjan sus derechos. En caso que Mercado Libre reciba una denuncia a través del BPP o un reclamo de un tercero o sospeche que se está cometiendo o se ha cometido una infracción a derechos de Propiedad Intelectual, Mercado Libre se reserva el derecho de adoptar todas las medidas que entienda adecuadas, lo que puede incluir la aplicación de sanciones sobre la cuenta y publicaciones del usuario, como también brindar datos personales del usuario, tal como se describe en las Políticas de Privacidad. </p>

                <p>Los Usuarios entienden y aceptan que la responsabilidad por las denuncias, suspensión y eliminación de publicaciones realizadas a través de BPP es únicamente de los miembros del Programa.</p>

                <p>Al solicitar la adhesión al BPP estarás aceptando los Términos y Condiciones del programa, y la información brindada tendrá carácter de declaración jurada.</p>

                

                <p>05 - Privacidad de la Información
                Para utilizar los Servicios ofrecidos por Mercado Libre, los Usuarios deberán facilitar determinados datos de carácter personal. Su información personal se procesa y almacena en servidores o medios magnéticos que mantienen altos estándares de seguridad y protección tanto física como tecnológica. Para mayor información sobre la privacidad de los Datos Personales y casos en los que será revelada la información personal, se pueden consultar nuestras Políticas de Privacidad.</p>

                <p>06 - Obligaciones de los Usuarios
                6.1 Obligaciones del Comprador. Durante el plazo fijado por el Usuario Vendedor, los Usuarios interesados realizarán ofertas de compra para los bienes y ofertas de contratación para los servicios. La oferta de venta concluye una vez que vence el plazo de la publicación del producto o se acaban las cantidades estipuladas por el Vendedor, y la oferta de contratación del servicio culmina con el vencimiento del plazo de la publicación.</p>

                <p>El Comprador está obligado a intentar comunicarse con el vendedor y completar la operación si ha realizado una oferta por un artículo publicado, independientemente de la categoría o sección, salvo que la operación esté prohibida por la ley o los Términos y Condiciones Generales y demás políticas de MercadoLibre, en cuyo caso no estará obligado a concretar la operación.</p>

                <p>Al ofertar por un artículo el Usuario acepta quedar obligado por las condiciones de venta incluidas en la descripción del artículo en la medida en que las mismas no infrinjan las leyes o los Términos y Condiciones Generales y demás políticas de MercadoLibre. La oferta de compra es irrevocable salvo en circunstancias excepcionales, tales como que el vendedor cambie sustancialmente la descripción del artículo después de realizada alguna oferta, que exista un claro error tipográfico, o que no pueda verificar la identidad del vendedor. Las compras realizadas en la categoría Supermercado, se entiende que les aplican los mismos los Términos y Condiciones Generales y demás políticas de MercadoLibre, sin embargo, tal como lo indican las reglas de protección al consumidor no habrá derecho de retracto en la adquisición de bienes perecederos, bienes de uso personal o aquellos bienes no puedan ser devueltos o puedan deteriorarse o caducar con rapidez.</p>

                <p>El comprador puede revocar la compra dentro de un plazo de 10 días desde que recibe el producto o podrá pedir el cambio o devolución del mismo en los términos de los programas de Compra Protegida, Mercado Puntos y demás Anexos, hasta 30 días después de la recepción del producto. Si el Usuario cumple con los requisitos previamente señalados y efectivamente revoca la compra y/o proceda una devolución en relación con la misma, el Usuario autoriza para que Mercado Libre haga el reembolso del importe en relación con dicha compra en la cuenta de Mercado Pago del Usuario, el cuál estará disponible de forma inmediata y desde la cual podrá transferir el dinero de manera gratuita a la cuenta bancaria de su preferencia, enviarlo a la cuenta bancaria de otra persona, retirarlo y/o utilizarlo para compras dentro de la propia plataforma.</p>

                <p>Las ofertas de compra sólo serán consideradas válidas, una vez que hayan sido procesadas por el sistema informático de Mercado Libre.

                <p>Impuestos. Tal como lo establece la normativa fiscal vigente, el comprador debe exigir factura o ticket al vendedor como comprobante de la operación. El vendedor no estará obligado a emitir factura o ticket sólo en el caso de tratarse de una persona física que efectúa ventas ocasionalmente.</p>

                <p>6.2. Obligaciones del Vendedor. El Usuario Vendedor debe tener capacidad legal para vender el bien objeto de su oferta. Asimismo, debe cumplir con todas las obligaciones regulatorias pertinentes y contar con los registros, habilitaciones, permisos y/o autorizaciones exigidos por la normativa aplicable para la venta de los bienes y servicios ofrecidos. El usuario vendedor deberá cumplir con la normatividad vigente en materia de protección al consumidor, tales como, entregar información veraz, clara y suficiente, indicar el precio por unidad de medida en los productos que le sea aplicable, evitar publicidad engañosa en promociones, ofertas o descuentos que le otorgue al usuario comprador y cualquier otra obligación derivada de su publicación. El no cumplimiento de dicha obligación, facultará a Mercado Libre a suspender y/o inhabilitar al usuario vendedor para continuar operando en el sitio. Si el Usuario Vendedor ha recibido una oferta sobre el precio que estableció en la publicación, queda obligado a intentar comunicarse con el comprador y completar la operación con el Usuario que ofertó. La cancelación de una venta por parte del Usuario vendedor impactará en su reputación. Aquel Usuario vendedor que cancele un porcentaje de ventas igual o superior a 2,5%, podrá ser advertido, suspendido y/o inhabilitado por Mercado Libre para continuar operando en el sitio. Asimismo, podremos restringir, suspender o inhabilitar al Usuario vendedor que repetidamente incumpla las condiciones pactadas en la venta, afectando la experiencia de compra. </p>

                <p>Mercado Libre tendrá el derecho de requerir, conforme los criterios que considere pertinentes, que ciertos Usuarios vendedores solamente anuncien sus bienes o servicios en el Sitio Web mediante la utilización de los Servicios de Gestión de Pagos online de Mercado Pago y/o otras herramientas ofrecidas por Mercado Libre para el cobro del bien vendido y de las tarifas por la utilización de los servicios, importando eventualmente en el pago de tarifas aplicables por la utilización de los mismos.</p>

                <p>Dado que Mercado Libre es un punto de encuentro entre comprador y vendedor y no participa de las operaciones que se realizan entre ellos, el Vendedor será responsable por todas las obligaciones y cargas impositivas que correspondan por la venta de sus artículos, sin que pudiera imputársele a Mercado Libre algún tipo de responsabilidad por incumplimientos en tal sentido.</p>

                <p>Cuando el Vendedor haya recibido una oferta en un artículo por él publicado, deberá calificar a la contraparte de acuerdo a lo establecido en la Cláusula 14 de estos Términos y Condiciones Generales.</p>

                <p>Durante las jornadas de los días sin IVA previstos para el 2021 de conformidad con la ley 2155 de 2021, decreto 1314 de 2021 y circular 006 de 2021, los vendedores que participen en la jornada estarán obligados a:</p>

                <p>Exhibir el precio del producto informando el precio exento de IVA; y el descuento adicional por oferta o promoción, si aplica. Así mismo, indicar si el producto ya se encontraba exento de IVA con independencia de la jornada, de conformidad con el mecanismo que Mercado Libre habilite para este fin.
                Expedir la factura o documento equivalente mediante facturación electrónica, en la cual debe identificarse al adquiriente consumidor final de dichos bienes cubiertos por la exención y reflejar la disminución del valor del IVA.
                Emitir la factura al consumidor a más tardar el día siguiente al Día sin IVA en el que se realizó la venta.
                Entregar al consumidor final los bienes adquiridos máximo dentro de las dos semanas siguientes a la fecha en la que se expidió la factura, so pena de que no aplique la exención.
                Abstenerse de incluir en las piezas de comunicación imágenes o textos alusivos al beneficio tributario otorgado por el Gobierno Nacional, que puedan generar confusión al consumidor sobre la aplicación del mismo.
                Abstenerse de utilizar afirmaciones, proclamas, imágenes o texto, que transmitan el mensaje que el incentivo tributario de exención del impuesto sobre las ventas – IVA, es otorgado por el productor o proveedor o asumido por él en lugar del consumidor.
                Impuestos. Como se menciona anteriormente, Mercado Libre sólo pone a disposición de los Usuarios un espacio virtual que les permite comunicarse mediante Internet para encontrar una forma de vender o comprar artículos y/o servicios. Mercado Libre no tiene participación alguna en el proceso de negociación y perfeccionamiento del contrato definitivo entre las partes. Por eso, Mercado Libre no es responsable por el efectivo cumplimiento de las obligaciones fiscales o impositivas establecidas por la ley vigente.</p>

                <p>Cualquier controversia derivada del presente acuerdo, su existencia, validez, interpretación, alcance o cumplimiento, será sometida a las leyes aplicables y a los Tribunales competentes de la Ciudad de Bogotá y los procedimientos se llevarán a cabo en idioma castellano.</p>

                <p>Toda la información suministrada por los Usuarios, se tomará como verídica para efectos tributarios.</p>

                <p> 19 - Domicilio
                Se fija como domicilio de MercadoLibre Colombia LTDA., con NIT 830067394-6, la Carrera 17 No 93-09, piso 3, Bogotá D.C., Colombia. Teléfono (1) 7053050.</p>

                <p>Si tienes alguna duda sobre los Términos y Condiciones Generales o demás políticas y principios que rigen Mercado Libre consulta nuestra página de Ayuda.</p>
                </p>
            </Container>
        </Container>
    )
}