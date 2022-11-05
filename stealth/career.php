<?php
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: /");
    exit();
?>


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
  <?php include_once 'view/header.html'; ?>
  <!-- header end -->

  <main class="home">
    <!-- Header Section -->
    <section class="bs-banner typ-career">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="inner-content">           
                <h2 class="bs-heading typ-white career-page-mrgB30 wow fadeInUp" >
                Let's grab some coffee  <span class="mob-block-element">& see if you're a fit.</span>
                </h2>             
              <p class="bs-heading typ-sub-para text-white wow fadeInUp" data-wow-delay="0.3s">
                Drop us an email at 
                <span class="d-block"><a href="mailto:hello@stealth.design">hello@stealth.design</a> if you’re game</span>
                </p>
            </div>
          </div>
          <div class="col-md-5 align-self-center">
              <img class="img-fluid wow fadeInUp" data-wow-delay="0.6s" src="assets/images/career.png" alt="career">
          </div>
        </div>
      </div>
    </section>
    <!-- Header Section end--> 

    <!-- faq section -->
    <section class="lyt-section typ-career-faq pt-0">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="bs-heading career-hd wow fadeInUp">
                Who are we looking for?
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 bs-faq career-faq">
            <ul class="faq-list accordion wow fadeInUp" data-wow-delay="0.3s">
              <li> <a  data-bs-toggle="collapse" class="faq-title" data-bs-target="#faq1"
                  aria-expanded="true">
                  Senior UI Designer
                  <i class="icon icon-plus icon-show"></i>
                  <i class="icon icon-minus icon-off"></i>
                </a>
                <div id="faq1" class="collapse show" data-bs-parent=".faq-list" style>
                  <p class="list-desc">
                    Provide work effort estimates to management to assist in setting priorities. Deliver timely work in accordance with estimates. Analyze data-driven insights and user research to inform design decisions.
                </div>
              </li>
              <li>
                <a  data-bs-toggle="collapse" data-bs-target="#faq2"
                  class="collapsed faq-title" aria-expanded="false">
                  UI Designer
                  <span class="icon icon-plus icon-show"></span>
                  <span class="icon icon-minus icon-off"></span>
                </a>
                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                  <p class="list-desc">
                    Responsible for creating interactive programs that enhance a customer's experience with a brand and facilitate an enjoyable experience on the business's website. UI designers also need to have a working understanding of coding and transfer the brand's strength through the interface of a product.
                  </p>
                </div>
              </li>
              <li>
                <a  data-bs-toggle="collapse" data-bs-target="#faq3"
                  class="collapsed faq-title" aria-expanded="false">
                  Senior UX Designer
                  <span class="icon icon-plus icon-show"></span>
                  <span class="icon icon-minus icon-off"></span>
                </a>
                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                  <p class="list-desc">
                    Responsible for leading and mentoring the junior designers, as well as overseeing all aspects of the design process from start to finish. You will need to have a strong understanding of user experience principles and be able to apply them to real-world scenarios. In addition, you will need to be able to effectively communicate your designs to clients and be able to justify your decisions.
                  </p>
                </div>
              </li>
              <li>
                <a  data-bs-toggle="collapse" data-bs-target="#faq6"
                  class="collapsed faq-title" aria-expanded="false">
                  UX Designer
                  <span class="icon icon-plus icon-show"></span>
                  <span class="icon icon-minus icon-off"></span>
                </a>
                <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                  <p class="list-desc">
                    UX designers are responsible for creating the user experience of a product. They take into account everything from aesthetics to functionality when designing interfaces and interactions that will be used by real people. UX designers must have strong communication skills in order to effectively convey their ideas to other members of their team. They also need to be able to work independently on complex projects with tight deadlines.
                  </p>
                </div>
              </li>
              <li>
                <a  data-bs-toggle="collapse" data-bs-target="#faq4"
                  class="collapsed faq-title" aria-expanded="false">
                  Junior Account Executive
                  <span class="icon icon-plus icon-show"></span>
                  <span class="icon icon-minus icon-off"></span>
                </a>
                <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                  <p class="list-desc">
                    Meet and exceed sales quotas, developing long-term client relationships. Assist with creation, editing, and finalization of marketing materials and advertising. Understand and act as an expert in all organizational products.
                  </p>
                </div>
              </li>
              <li>

                <a  data-bs-toggle="collapse" data-bs-target="#faq5"
                  class="collapsed faq-title" aria-expanded="false">
                  HR and Admin
                  <span class="icon icon-plus icon-show"></span>
                  <span class="icon icon-minus icon-off"></span>
                </a>
                <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                  <p class="list-desc">
                    Perform a variety of personnel-related administrative tasks. You will support the HR department in duties like posting job ads, updating HR database and processing employees requests. Our HR administrative assistant position requires excellent organizational skills and the ability to handle sensitive information confidentially. If you are passionate about HR policies and procedures and want to help create a nourishing workplace, this position is for you.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    <!-- faq section end -->
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