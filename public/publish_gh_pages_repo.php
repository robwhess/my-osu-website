<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>GitHub Pages Repo Publisher</title>
    <style media="screen">
      body {
        max-width: 640px;
      }
      label {
        font-weight: bold;
      }
      .error {
        background-color: #e47f97;
        padding: 5px;
        margin: 5px 0;
      }
    </style>
  </head>
  <body>
    <h1>GitHub Pages Repo Publisher</h1>
    <?php if (!$_POST || trim($_POST['org']) == '' || trim($_POST['repo']) == ''): ?>
      <p>You can use this form to enable GitHub Pages for a GitHub repository for one of your course assignments.  Just specify in the form below the GitHub organization where the repo lives (e.g. "osu-cs290-f20") and the name of the repo itself (e.g. "assignment-1-robwhess").</p>
      <form action="publish_gh_pages_repo.php" method="post">
        <p>
          <label for="org-input">Organization name (e.g. "osu-cs290-f20"): </label>
          <input type="text" name="org" id="org-input" />
        </p>
        <p>
          <label for="repo-input">Repo name (e.g. "assignment-1-robwhess"): </label>
          <input type="text" name="repo" id="repo-input" />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
      <?php if ($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
        <div class="error">
          Please specify a valid GitHub organization and repo name.
        </div>
      <?php endif; ?>
    <?php else:
      $token = trim(file_get_contents('../gh_script_token.txt'));
      $org = htmlspecialchars(trim($_POST['org']));
      $repo = htmlspecialchars(trim($_POST['repo']));

      $ch = curl_init('https://api.github.com/repos/'.$org.'/'.$repo.'/pages');
      curl_setopt_array($ch, array(
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_HTTPHEADER => array(
          'Authorization: token '.$token,
          'Accept: application/vnd.github.switcheroo-preview+json',
          'Content-Type: application/json',
          'User-Agent: robwhess'
        ),
        CURLOPT_POSTFIELDS => json_encode(array(
          'source' => array('branch' => 'master')
        ))
      ));

      $res = curl_exec($ch);
      if ($res && curl_getinfo($ch, CURLINFO_RESPONSE_CODE) == 201):
        $resBody = json_decode($res, TRUE);
        $url = $resBody['html_url'];
    ?>
      <div>
        <p>Repo <?php echo $org.'/'.$repo; ?> successfully published on GitHub Pages at the following URL:</p>
        <p><a href="<?php echo $url; ?>"><?php echo $url; ?></a></p>
        <p>Note that it may take a few minutes for your Pages site to be built before you can see it live.</p>
      </div>
    <?php else: ?>
      <div class="error">
        <p>There was an error publishing your repo on GitHub Pages.  The error message returned by GitHub is printed below.  If this looks weird, please either try again later or report the issue to Hess.  If you do file a report, you should include the following info:</p>
        <p>HTTP Response Status Code: <?php echo curl_getinfo($ch, CURLINFO_RESPONSE_CODE); ?></p>
        <p>HTTP Response Body: <?php echo $res; ?></p>
      </div>
    <?php endif; ?>
    <?php endif; ?>
  </body>
</html>
