<!DOCTYPE html>
<html lang="en">
<head>

    <?= Loader::element('header_required'); ?>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="<?=$view->getThemePath()?>/css/atom.css?v=<?=time()?>">   
    <link rel="stylesheet" href="<?=$view->getThemePath()?>/css/style.css?v=<?=time()?>">
    <link rel="stylesheet" href="<?=$view->getThemePath()?>/css/mobile.css?v=<?=time()?>">

</head>

<body>

<div class="<?=$c->getPageWrapperClass()?>">

<header>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 creator sr-only">
                <p class="brand"><a href="/" title="Mushu"><img src="<?=$view->getThemePath()?>/images/logo.jpg" alt="Mushu"></a><span class="sr-only">Mushu</span></p>
                <h1>Phasmophobia Cheat Sheet</h1>
            </div>
        </div>
    </div>
</header>

<div class="container ghost-finder">
    <div class="row">
        
        <div class="col-sm-6 evidence-info">

            <?php
                $a = new Area('evidence-area');
                $a->display($c);
            ?>

        </div>

        <div class="col-sm-6 important-info">

            <?php
                $a = new Area('results-area');
                $a->display($c);
            ?>

        </div>

    </div>
</div>

<footer class="sr-only">

    <ul>
        <li>&#169; Mushu <?php echo date("Y"); ?></li>
        <li>Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank">Freepik</a>, <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev" target="_blank">Vitaly Gorbachev</a>, <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" target="_blank">Pixel perfect</a> & <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware" target="_blank">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></li>
    </ul>
    
</footer>
    

<script src="<?=$view->getThemePath()?>/js/main.js?v=<?=time()?>"></script>

</div>

<? Loader::element('footer_required'); ?>

</body>
</html>