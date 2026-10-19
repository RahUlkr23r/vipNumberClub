import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CDN = 'https://www.vipnumbersclub.com';
const IMG = (path: string) => `${CDN}/assets/front/img/${path}`;

interface TopHeaderProps {
  title?: string;
  centerIcon?: string;
  showHome?: boolean;
  showSearch?: boolean;
  backTo?: string;
  alignLeft?: boolean;
  leftIcon?: string;
  sticky?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  title,
  centerIcon,
  showHome = false,
  showSearch = true,
  backTo,
  alignLeft = false,
  leftIcon,
  sticky = true,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }, [navigate]);

  /* ---- Left icon: 3 variants (custom, link, back button) ---- */
  const renderLeft = () => {
    if (leftIcon) {
      return (
        <span className="top-header-icon top-header-icon--static" aria-hidden="true">
          <img src={leftIcon} alt="" />
        </span>
      );
    }

    if (backTo) {
      return (
        <Link
          to={backTo}
          className="top-header-icon"
          aria-label="Go back"
          title="Go back"
        >
          <img src={IMG('back-header.svg')} alt="" aria-hidden="true" />
        </Link>
      );
    }

    return (
      <button
        type="button"
        onClick={handleBack}
        className="top-header-icon bg-transparent border-0 p-0 cursor-pointer"
        aria-label="Go back"
        title="Go back"
      >
        <img src={IMG('back-header.svg')} alt="" aria-hidden="true" />
      </button>
    );
  };

  /* ---- Right action: skip rendering if already on that page ---- */
  const renderRightAction = (
    to: string,
    label: string,
    icon: string,
  ) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`top-header-icon ${isActive ? 'is-active' : ''}`}
        aria-label={label}
        aria-current={isActive ? 'page' : undefined}
        title={label}
      >
        <img src={IMG(icon)} alt="" aria-hidden="true" />
      </Link>
    );
  };

  return (
    <header
      className={`top-header ${sticky ? 'sticky top-0 z-[1020]' : ''}`}
    >
      <div className="container">
        <div
          className={`top-header-in ${
            alignLeft ? 'top-header-left' : 'top-header-center'
          }`}
        >
          {/* Left slot */}
          {renderLeft()}

          {/* Center slot */}
          {centerIcon ? (
            <div className="top-header-center-ic">
              <img src={centerIcon} alt="" aria-hidden="true" />
            </div>
          ) : title ? (
            <div className="top-header-con">
              <h2 className="top-header-title">{title}</h2>
            </div>
          ) : (
            <span />
          )}

          {/* Right actions */}
          <div className="top-header-actions">
            {showHome && renderRightAction('/', 'Home', 'home-icon-top.svg')}
            {showSearch &&
              renderRightAction('/search-results', 'Search numbers', 'search-header.svg')}
          </div>
        </div>
      </div>
    </header>
  );
};