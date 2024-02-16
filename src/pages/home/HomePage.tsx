import React from 'react';
import TopBar from '../Topbar';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Include the TopBar component */}
      <TopBar />

      {/* Main content */}
      <div className="bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="max-w-4xl w-full mx-4">
          <h1 className="text-4xl text-white mb-8 text-center">
            Welcome to University of Portsmouth Architecture Test
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
              <h2 className="text-2xl mb-4">Architectural Styles Test</h2>
              <p>
                Test your knowledge of architectural styles by identifying
                famous landmarks.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
              <h2 className="text-2xl mb-4">History of Architecture</h2>
              <p>
                Test your understanding of the history of architecture with
                timeline quizzes.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center text-white">
              <h2 className="text-2xl mb-4">Architectural Theory</h2>
              <p>
                Test your knowledge of architectural theory by answering
                multiple-choice questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
