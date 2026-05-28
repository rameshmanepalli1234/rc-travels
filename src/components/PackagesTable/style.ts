import styled from "styled-components";

export const StyledPackagesTable = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 56px auto 0;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 0 12px;
    max-width: 100%;
    overflow-x: hidden;
  }

  .packages-table-header {
    text-align: center;
    margin-bottom: 28px;
  }

  .packages-table-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4fbd39;
    margin-bottom: 10px;
  }

  .packages-table-title {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 10px;

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  .packages-table-subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
    line-height: 1.5;
  }

  .packages-table-scroll {
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(79, 189, 57, 0.15);
    background: #ffffff;
    overflow-x: auto;
  }

  .packages-table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
    font-size: 15px;

    thead {
      background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);

      th {
        padding: 16px 18px;
        text-align: left;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #ffffff;
        white-space: nowrap;

        &:last-child {
          text-align: center;
        }
      }
    }

    tbody tr {
      border-bottom: 1px solid #eef2ee;
      transition: background-color 0.2s ease;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: #f8fcf7;
      }

      &:nth-child(even) {
        background-color: #fafcfa;

        &:hover {
          background-color: #f3faf1;
        }
      }
    }

    td {
      padding: 18px;
      vertical-align: middle;
      color: #333;
      line-height: 1.45;
    }
  }

  .packages-table-tour-cell {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 200px;
  }

  .packages-table-thumb {
    width: 56px;
    height: 56px;
    border-radius: 10px;
    object-fit: cover;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .packages-table-tour-name {
    font-weight: 700;
    color: #1a1a1a;
    font-size: 15px;
    margin: 0 0 4px;
  }

  .packages-table-badge {
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 8px;
    border-radius: 12px;
    background: rgba(79, 189, 57, 0.15);
    color: #3da82c;
  }

  .packages-table-location,
  .packages-table-duration {
    color: #555;
    font-size: 14px;
  }

  .packages-table-price {
    font-size: 18px;
    font-weight: 800;
    color: #4fbd39;
    white-space: nowrap;
  }

  .packages-table-price-note {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: #888;
    margin-top: 2px;
  }

  .packages-table-inclusions {
    font-size: 13px;
    color: #555;
    max-width: 220px;
    line-height: 1.5;
  }

  .packages-table-availability {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    &.is-available {
      color: #2d7a22;

      &::before {
        background: #4fbd39;
      }
    }

    &.is-unavailable {
      color: #b45309;

      &::before {
        background: #f59e0b;
      }
    }
  }

  .packages-table-pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 28px;
    padding-top: 8px;
  }

  .packages-table-pagination-info {
    font-size: 14px;
    font-weight: 600;
    color: #666;
  }

  .packages-table-pagination-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .packages-table-toggle-btn {
    min-width: 140px;
    padding: 12px 28px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease;
    border: 2px solid transparent;
  }

  .packages-table-toggle-more {
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    box-shadow: 0 6px 20px rgba(79, 189, 57, 0.35);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(79, 189, 57, 0.45);
    }
  }

  .packages-table-toggle-less {
    background: #ffffff;
    color: #4fbd39;
    border-color: #4fbd39;

    &:hover {
      background: #f3faf1;
      transform: translateY(-2px);
    }
  }

  .packages-table-book-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 110px;
    padding: 10px 18px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    border-radius: 8px;
    background: linear-gradient(135deg, #4fbd39 0%, #3da82c 100%);
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    box-shadow: 0 4px 14px rgba(79, 189, 57, 0.3);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(79, 189, 57, 0.4);
    }
  }

  .packages-table-book-btn-disabled {
    background: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    box-shadow: none;
    border: none;
    font-family: inherit;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  /* Mobile: stacked card rows (no horizontal scroll) */
  @media (max-width: 900px) {
    .packages-table-scroll {
      overflow-x: hidden;
      border: none;
      box-shadow: none;
      background: transparent;
      width: 100%;
      max-width: 100%;
    }

    .packages-table {
      min-width: 0;
      width: 100%;
      max-width: 100%;
      table-layout: fixed;

      thead {
        display: none;
      }

      tbody {
        display: block;
        width: 100%;
      }

      tbody tr {
        display: block;
        width: 100%;
        max-width: 100%;
        margin: 0 auto 16px;
        border: 1px solid rgba(79, 189, 57, 0.2);
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
        background: #ffffff !important;
        box-sizing: border-box;

        &:hover {
          background: #ffffff !important;
        }
      }

      td {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 6px;
        width: 100%;
        max-width: 100%;
        padding: 12px 16px;
        text-align: left;
        border-bottom: 1px solid #f0f4f0;
        box-sizing: border-box;
        overflow-wrap: anywhere;
        word-break: break-word;

        &::before {
          content: attr(data-label);
          position: static;
          width: auto;
          left: auto;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #4fbd39;
          flex-shrink: 0;
        }

        &:last-child {
          border-bottom: none;
          align-items: center;
          padding-top: 16px;
          padding-bottom: 16px;

          &::before {
            display: none;
            content: none;
          }
        }
      }

      .packages-table-tour-cell {
        flex-direction: row;
        align-items: center;
        gap: 12px;
        min-width: 0;
        width: 100%;
      }

      .packages-table-thumb {
        width: 52px;
        height: 52px;
      }

      .packages-table-tour-name {
        font-size: 14px;
        overflow-wrap: anywhere;
      }

      .packages-table-location,
      .packages-table-duration,
      .packages-table-inclusions {
        max-width: 100%;
        font-size: 14px;
      }

      .packages-table-price {
        white-space: normal;
        font-size: 17px;
      }

      .packages-table-availability {
        white-space: normal;
      }

      .packages-table-book-btn,
      .packages-table-book-btn-disabled {
        width: 100%;
        max-width: 280px;
        min-width: 0;
        margin: 0 auto;
        box-sizing: border-box;
      }
    }
  }
`;
