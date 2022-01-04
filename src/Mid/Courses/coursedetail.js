import axios from "axios";
import { useState } from "react";
import ReactPlayer from "react-player";

const CourseDetail = () => {

  const [watchComplete, setWatchComplete] = useState(false)

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.9 && !watchComplete) {
      setWatchComplete(true)
    }
  }

        return(
           <section className="class-details-area pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-12">
        <div className="class-details-desc">
          <div className="class-desc-image">
          <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=UjtOGPJ0URM"
        controls
        onProgress={handleWatchComplete}
      />
      <div
        className={
          watchComplete
            ? "marker marker--is-complete"
            : "marker marker--not-complete"
        }
      >
        Completed
      </div>
    </div>
      
          </div>
          <div className="tab class-details-tab">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <ul className="tabs">
                  <li>
                    <a href="#">
                      Teacher
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lesson
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Cost
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="tab_content">
                  <div className="tabs_item">
                    <div className="class-desc-content">
                      <h3>Education Lessons</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>English Lesson Class</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>Requirements</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <ul className="requirements-list">
                        <li>
                          <i className="bx bx-check" />
                          Aliquam sit amet mi vitae turpis gravida vulputate.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Proin a orci nec sapien condimentum imperdiet.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Suspendisse viverra lectus eu augue efficitur pulvinar.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Mauris a purus ut mauris sodales ultrices.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="class-desc-content">
                      <h3>Education Lessons</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>English Lesson Class</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>Requirements</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <ul className="requirements-list">
                        <li>
                          <i className="bx bx-check" />
                          Aliquam sit amet mi vitae turpis gravida vulputate.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Proin a orci nec sapien condimentum imperdiet.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Suspendisse viverra lectus eu augue efficitur pulvinar.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Mauris a purus ut mauris sodales ultrices.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="class-desc-content">
                      <h3>Education Lessons</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>English Lesson Class</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>Requirements</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <ul className="requirements-list">
                        <li>
                          <i className="bx bx-check" />
                          Aliquam sit amet mi vitae turpis gravida vulputate.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Proin a orci nec sapien condimentum imperdiet.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Suspendisse viverra lectus eu augue efficitur pulvinar.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Mauris a purus ut mauris sodales ultrices.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="class-desc-content">
                      <h3>Education Lessons</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>English Lesson Class</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <h3>Requirements</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <ul className="requirements-list">
                        <li>
                          <i className="bx bx-check" />
                          Aliquam sit amet mi vitae turpis gravida vulputate.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Proin a orci nec sapien condimentum imperdiet.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Suspendisse viverra lectus eu augue efficitur pulvinar.
                        </li>
                        <li>
                          <i className="bx bx-check" />
                          Mauris a purus ut mauris sodales ultrices.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="class-details-information">
          <h3>Information</h3>
          <ul>
            <li>
              <span>Student:</span>
              25
            </li>
            <li>
              <span>Lectures:</span>
              6
            </li>
            <li>
              <span>Time:</span>
              9AM - 11:30AM
            </li>
            <li>
              <span>Learn Day:</span>
              Monday, Wednesday
            </li>
            <li>
              <span>Language:</span>
              English
            </li>
          </ul>
        </div>
        <div className="class-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
          </div>
          <form className="newsletter-form" data-bs-toggle="validator">
            <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
            <button type="submit">Subscribe</button>
            <div id="validator-newsletter" className="form-result" />
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


        )
    
}

export default CourseDetail;