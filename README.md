# MMRAngular

Summary
  MMRAngular will be the foundation that will turn into MarciaMattinglyReller.com, replacing the existing Wordpress site.
  This was built entirely in AngularJS using the following tools:
    Lightbox v2 by Lokesh Dhakar (http://lokeshdhakar.com/projects/lightbox2/) was used for the medium pages.
    iHover (http://gudh.github.io/ihover/dist/) was used for the main artwork/gallery page.

  Both Lightbox and iHover can be applied to any page within the website. Currently iHover is only being utilized on the Gallery page to showcase the titles of the various medium pages. Lightbox is then used on those medium pages to showcase the artwork in a larger size.

  The showcased artwork was converted into a .json file allowing for easy access based on medium. The artwork is contained in a separate file, rather than uploading to a database. Since there will be a relatively small number of pieces, using a database such as MongoDB was deemed unnecessary by the designer. Only one controller is necessary to pull the artwork from the .json file.

  This site was created in Atom, and used a plugin to launch a server. 

  All artwork was created by and is the property of Marcia Mattingly Reller.
