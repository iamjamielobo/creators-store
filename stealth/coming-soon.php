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
  <title>Stealth</title>
  <meta name="description" content="" />
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

  <main class="home">

    <section class="lyt-section bg-grey-new ">
        <div class="container">
          <div class="row align-items-center text-center lyt-section">
              <div class="col-12 bs-fnf">
                <div class="notfound p-5 ">
                    <div class="notfound-404">
                      <!-- <h1>404</h1> -->
                    </div>
                    <h2 class="bs-heading ab-none">Something awesome is coming soon.</h2>
                    <p class="cm-para mb-5">
                      The page you are looking for might have been removed had its name
                      changed or is temporarily unavailable.
                    </p>
                    <a class="bs-btn typ-outline" href="index.php">Back To Homepage</a>
                  </div>
              </div>
          </div>
        </div>
      </section>  
  </main>


  <!-- modal -->

  <div class="modal fade" id="gallery-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="ratio ratio-16x9 video-inner video-item modal-img">
            <video class="video-screen " muted autoplay loop playsinline>
              <source src="assets/images/showcase.mp4" type="video/mp4">
              <!-- <source  src="assets/images/home/video-bg.jpg" type=""> -->
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
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