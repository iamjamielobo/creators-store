<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html>
<!--<![endif]-->

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Stealth | Home Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <!-- css group start -->
    <?php include_once 'view/include_css.html'; ?>
    <!-- css group end -->
</head>

<body>
    <!--[if lt IE 7]>
      <p class="browsehappy">
        You are using an <strong>outdated</strong> browser. Please
        <a >upgrade your browser</a> to improve your experience.
      </p>
    <![endif]-->
    <!-- header start -->
    <div class="white-header">
        <?php include_once 'view/header.html'; ?>
    </div>
    <!-- header end -->

    <main class="sitemap">

        <section class="lyt-section typ-padding-small typ-sitemap typ-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="bs-heading typ-black marginB">
                            Sitemap
                        </h2>
                        <ul class="sitemap">
                            <li>
                                <a href="index.php">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="about-us.php">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="our-work.php">
                                    Our Work
                                </a>
                                <ul class="sitemap-inner">
                                    <li>
                                        <a href="restroworks.php">
                                            Restrowork
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ketto.php">
                                            Ketto
                                        </a>
                                    </li>
                                    <li>
                                        <a href="manzil.php">
                                            Manzil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="haptik.php">
                                            Haptik
                                        </a>
                                    </li>
                                    <li>
                                        <a href="clovia.php">
                                            Clovia
                                        </a>
                                    </li>
                                    <li>
                                        <a href="1Pharmacy.php">
                                            1Pharmacy 
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="process.php">
                                    Process
                                </a>
                            </li>
                            <li>
                                <a href="contact-us.php">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- footer-band start -->
        <?php include_once 'view/footer-band.html'?>
        <!-- footer-band end -->
    </main>


    <!-- footer start -->
    <?php include_once 'view/footer.html'?>
    <!-- footer end -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> -->
    <!-- js group start -->
    <?php include_once 'view/include_js.html'?>
    <!-- js group end -->
</body>

</html>